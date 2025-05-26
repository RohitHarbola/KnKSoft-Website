import { NextResponse } from "next/server";
import sql from "mssql";

// Define type for SQL config
interface SQLConfig {
  user: string;
  password: string;
  database: string;
  server: string;
  port: number;
  options: {
    trustServerCertificate: boolean;
    encrypt: boolean;
    enableArithAbort: boolean;
    authentication: {
      type: string;
    };
  };
  pool: {
    max: number;
    min: number;
    idleTimeoutMillis: number;
  };
  requestTimeout: number;
  connectionTimeout: number;
}

const sqlConfig: SQLConfig = {
  user: "KNKSoftUser", // Hardcoded to verify exact value
  password: "K&KS0f1U$er", // Hardcoded to verify exact value
  database: "KnkSoft",
  server: "103.205.66.35",
  port: 2499,
  options: {
    trustServerCertificate: true,
    encrypt: false,
    enableArithAbort: true,
    authentication: {
      type: "default", // Try default authentication
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

export async function GET() {
  let pool: sql.ConnectionPool | undefined;
  try {
    // Add more detailed connection testing
    console.log("Attempting to connect to SQL Server...");
    pool = await sql.connect(sqlConfig);
    console.log("Connected successfully, testing query...");

    // Test with a simple query first
    const testResult: sql.IResult<{ test: number }> = await pool
      .request()
      .query("SELECT 1 as test");

    console.log("Simple query successful, checking version...");

    // If simple query works, try getting version
    const versionResult: sql.IResult<{ version: string }> = await pool
      .request()
      .query("SELECT @@VERSION as version");

    return NextResponse.json({
      success: true,
      test: testResult.recordset[0].test,
      version: versionResult.recordset[0].version,
      message: "Successfully connected to database",
      connectionDetails: {
        server: sqlConfig.server,
        port: sqlConfig.port,
        database: sqlConfig.database,
        user: sqlConfig.user,
      },
    });
  } catch (error) {
    // Type the error properly
    const dbError = error as sql.RequestError;
    console.error("Database connection error:", {
      message: dbError.message,
      code: dbError.code,
      state: dbError.state,
      stack: dbError.stack,
    });

    return NextResponse.json(
      {
        error: "Database connection failed",
        details: {
          message: dbError.message,
          code: dbError.code,
          state: dbError.state,
          attempted: {
            server: sqlConfig.server,
            port: sqlConfig.port,
            database: sqlConfig.database,
            user: sqlConfig.user,
          },
        },
      },
      { status: 500 }
    );
  } finally {
    if (pool) {
      await pool.close();
    }
  }
}
