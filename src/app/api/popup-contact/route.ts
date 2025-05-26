import { NextRequest, NextResponse } from "next/server";
import sql from "mssql";
import nodemailer from "nodemailer";

// SQL Server Configuration
const sqlConfig = {
  user: "KNKSoftUser",
  password: "K&KS0f1U$er",
  database: "KnkSoft",
  server: "103.205.66.35",
  port: 2499,
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

// SMTP configuration for email notifications
const emailConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

/**
 * Handles POST requests for popup contact form submissions
 * @param request - NextRequest object containing form data
 * @returns NextResponse with success/error message
 */
export async function POST(request: NextRequest) {
  let pool;
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      "fullName",
      "businessEmail",
      "contactNumber",
      "companyName",
      "companySize",
      "jobTitle",
      "budget",
      "idea",
      "source_url",
    ];

    const missingFields = requiredFields.filter((field) => !body[field]);
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Connect to SQL Server
    pool = await sql.connect(sqlConfig);

    // Create popup_contact table if it doesn't exist with source_url field
    await pool.request().query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='popup_contact' AND xtype='U')
      BEGIN
        CREATE TABLE popup_contact (
          id INT IDENTITY(1,1) PRIMARY KEY,
          full_name NVARCHAR(255) NOT NULL,
          business_email NVARCHAR(255) NOT NULL,
          contact_number NVARCHAR(20) NOT NULL,
          company_name NVARCHAR(255) NOT NULL,
          company_size NVARCHAR(50) NOT NULL,
          job_title NVARCHAR(100) NOT NULL,
          budget DECIMAL(10,2) NOT NULL,
          idea NTEXT NOT NULL,
          source_url NVARCHAR(500) NULL,
          created_at DATETIME DEFAULT GETDATE(),
          updated_at DATETIME DEFAULT GETDATE()
        )
      END
      ELSE IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('popup_contact') AND name = 'source_url')
      BEGIN
        ALTER TABLE popup_contact ADD source_url NVARCHAR(500) NULL
      END
    `);

    // Insert form submission into popup_contact table
    await pool
      .request()
      .input("fullName", sql.NVarChar, body.fullName)
      .input("businessEmail", sql.NVarChar, body.businessEmail)
      .input("contactNumber", sql.NVarChar, body.contactNumber)
      .input("companyName", sql.NVarChar, body.companyName)
      .input("companySize", sql.NVarChar, body.companySize)
      .input("jobTitle", sql.NVarChar, body.jobTitle)
      .input("budget", sql.Decimal, parseFloat(body.budget))
      .input("idea", sql.NText, body.idea)
      .input("sourceUrl", sql.NVarChar, body.source_url).query(`
        INSERT INTO popup_contact (
          full_name,
          business_email,
          contact_number,
          company_name,
          company_size,
          job_title,
          budget,
          idea,
          source_url
        )
        VALUES (
          @fullName,
          @businessEmail,
          @contactNumber,
          @companyName,
          @companySize,
          @jobTitle,
          @budget,
          @idea,
          @sourceUrl
        )
      `);

    // Send email notification if SMTP is configured
    if (process.env.SMTP_HOST) {
      const transporter = nodemailer.createTransport(emailConfig);
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.NOTIFICATION_EMAIL,
        subject: "New Popup Contact Form Submission",
        html: `
          <h2>New Popup Contact Form Submission</h2>
          <p><strong>Name:</strong> ${body.fullName}</p>
          <p><strong>Business Email:</strong> ${body.businessEmail}</p>
          <p><strong>Contact Number:</strong> ${body.contactNumber}</p>
          <p><strong>Company:</strong> ${body.companyName}</p>
          <p><strong>Company Size:</strong> ${body.companySize}</p>
          <p><strong>Job Title:</strong> ${body.jobTitle}</p>
          <p><strong>Budget:</strong> $${body.budget}</p>
          <p><strong>Project Idea:</strong> ${body.idea}</p>
          <p><strong>Source URL:</strong> ${body.source_url}</p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in POST /api/popup-contact:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to process request",
        details: error instanceof Error ? error.stack : undefined,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  } finally {
    if (pool) {
      await pool.close();
    }
  }
}
