import { NextRequest, NextResponse } from "next/server";
import sql from "mssql";
import { sendContactNotification } from "@/lib/email";

// Define interface for error handling
interface SQLError {
  message: string;
  code?: string;
  state?: number;
  class?: number;
  serverName?: string;
  lineNumber?: number;
  originalError?: unknown;
}

// Define interface for form data
interface GetInTouchFormData {
  name: string;
  email: string;
  phone: string;
  businessEmail: string;
  companyName: string;
  interestedServices: string;
  launchTimeline: string;
  budget: number;
  aboutProject: string;
  sourceUrl: string;
}

// Define SQL Server config
const sqlConfig = {
  user: process.env.SQL_SERVER_USER,
  password: process.env.SQL_SERVER_PASSWORD,
  database: process.env.SQL_SERVER_DATABASE,
  server: process.env.SQL_SERVER_HOST,
  port: Number(process.env.SQL_SERVER_PORT),
  options: {
    trustServerCertificate: true,
    encrypt: false,
    enableArithAbort: true,
    authentication: {
      type: "default",
    },
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  requestTimeout: 30000,
  connectionTimeout: 30000,
};

async function ensureTableExists(pool: sql.ConnectionPool) {
  try {
    // First check if table exists using proper schema reference
    await pool.request().query(`
      IF NOT EXISTS (
        SELECT * 
        FROM sys.tables t
        JOIN sys.schemas s ON t.schema_id = s.schema_id
        WHERE s.name = 'dbo' 
        AND t.name = 'getintouch'
      )
      BEGIN
        CREATE TABLE [dbo].[getintouch] (
          [id] INT IDENTITY(1,1) PRIMARY KEY,
          [name] NVARCHAR(100) NOT NULL,
          [email] NVARCHAR(100) NULL,
          [phone] NVARCHAR(20) NULL,
          [companyName] NVARCHAR(100) NOT NULL,
          [interestedServices] NVARCHAR(100) NOT NULL,
          [launchTimeline] NVARCHAR(50) NOT NULL,
          [budget] DECIMAL(10,2) NOT NULL,
          [aboutProject] NVARCHAR(MAX) NULL,
          [sourceUrl] NVARCHAR(255) NULL,
          [createdAt] DATETIME NOT NULL,
          [updatedAt] DATETIME NOT NULL
        )
      END
    `);
    console.log("Table check/creation completed successfully");
    return true;
  } catch (error) {
    console.error("Error creating table:", error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  let pool: sql.ConnectionPool | undefined;

  try {
    const body = (await request.json()) as GetInTouchFormData;
    const sourceUrl = request.headers.get("referer") || "Direct Access";

    // Connect to SQL Server
    console.log("Connecting to SQL Server...");
    pool = await sql.connect(sqlConfig);
    console.log("Connected successfully");

    // Ensure table exists
    await ensureTableExists(pool);

    // Insert data into the getintouch table with proper schema reference
    const result = await pool
      .request()
      .input("name", sql.NVarChar, body.name)
      .input("email", sql.NVarChar, body.email)
      .input("phone", sql.NVarChar, body.phone)
      .input("companyName", sql.NVarChar, body.companyName)
      .input("interestedServices", sql.NVarChar, body.interestedServices)
      .input("launchTimeline", sql.NVarChar, body.launchTimeline)
      .input("budget", sql.Decimal, body.budget)
      .input("aboutProject", sql.NVarChar, body.aboutProject)
      .input("sourceUrl", sql.NVarChar, body.sourceUrl)
      .input("createdAt", sql.DateTime, new Date())
      .input("updatedAt", sql.DateTime, new Date()).query(`
        INSERT INTO [dbo].[getintouch] (  
          [name], [email], [phone], [companyName],
          [interestedServices], [launchTimeline], [budget],
          [aboutProject], [sourceUrl], [createdAt], [updatedAt]
        )
        OUTPUT INSERTED.id
        VALUES (
          @name, @email, @phone, @companyName,
          @interestedServices, @launchTimeline, @budget,
          @aboutProject, @sourceUrl, @createdAt, @updatedAt
        );
      `);

    console.log("Data inserted successfully");

    // Send email notification
    const emailSent = await sendContactNotification({
      ...body,
      sourceUrl,
    });

    return NextResponse.json(
      {
        message: "Contact request submitted successfully",
        contactId: result.recordset[0].id,
        emailSent,
      },
      { status: 201 }
    );
  } catch (error) {
    const sqlError = error as SQLError;
    console.error("Database Error Details:", {
      message: sqlError.message,
      code: sqlError.code,
      state: sqlError.state,
      class: sqlError.class,
      serverName: sqlError.serverName,
      lineNumber: sqlError.lineNumber,
    });

    // Return a more specific error message
    return NextResponse.json(
      {
        message: "Error submitting contact request",
        error: sqlError.message,
        details:
          sqlError.code === "EREQUEST"
            ? "Database request error"
            : "Server error",
      },
      { status: 500 }
    );
  } finally {
    if (pool) {
      try {
        await pool.close();
        console.log("Database connection closed");
      } catch (closeError) {
        console.error("Error closing database connection:", closeError);
      }
    }
  }
}
