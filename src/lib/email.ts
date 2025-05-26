import nodemailer from "nodemailer";
import { formatCurrency } from "./utils";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface ContactFormData {
  name: string;
  businessEmail: string;
  companyName: string;
  interestedServices: string;
  launchTimeline: string;
  budget: number;
  aboutProject: string;
  sourceUrl: string;
}

// Send notification to admin
export async function sendContactNotification(data: ContactFormData) {
  const formattedBudget = formatCurrency(data.budget);

  // Generate email content for both admin and user
  const adminEmailContent = generateAdminEmailContent(data, formattedBudget);
  const userEmailContent = generateUserEmailContent(data.name);

  // Admin notification email
  const adminMailOptions = {
    from: data.businessEmail, // Set sender as user's email
    to: process.env.SMTP_USER,
    subject: `New Contact Form Submission - ${data.companyName}`,
    html: adminEmailContent,
    replyTo: data.businessEmail,
  };

  // User confirmation email
  const userMailOptions = {
    from: process.env.SMTP_USER,
    to: data.businessEmail,
    subject: "Thank you for contacting HackInTown",
    html: userEmailContent,
  };

  try {
    // Send emails separately to identify which one fails
    const [adminResult, userResult] = await Promise.all([
      transporter.sendMail(adminMailOptions).catch((err) => {
        console.error("Admin email failed:", err);
        return false;
      }),
      transporter.sendMail(userMailOptions).catch((err) => {
        console.error("User email failed:", err);
        return false;
      }),
    ]);

    // Check if both emails were sent successfully
    if (!adminResult || !userResult) {
      console.error("Failed to send emails:", { adminResult, userResult });
      return false;
    }

    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
}

// Generate admin email content
function generateAdminEmailContent(
  data: ContactFormData,
  formattedBudget: string
) {
  const htmlContent = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 25px; color: white;">
        <h2 style="margin: 0; font-size: 24px; font-weight: 600;">New Contact Submission</h2>
        <p style="margin: 5px 0 0; opacity: 0.9;">${
          data.companyName
        } | ${new Date().toLocaleDateString()}</p>
      </div>

      <!-- Contact Card -->
      <div style="padding: 25px 30px;">
        <div style="background: #f8fafc; border-radius: 10px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #2563eb;">
          <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Contact Information</h3>
          <div style="display: grid; grid-template-columns: 140px 1fr; gap: 12px; color: #64748b;">
            <span style="font-weight: 500;">Name:</span>
            <span style="color: #1e293b;">${data.name}</span>
            <span style="font-weight: 500;">Email:</span>
            <span style="color: #2563eb;"><a href="mailto:${
              data.businessEmail
            }" style="color: #2563eb; text-decoration: none;">${
    data.businessEmail
  }</a></span>
            <span style="font-weight: 500;">Company:</span>
            <span style="color: #1e293b;">${data.companyName}</span>
          </div>
        </div>

        <!-- Project Details -->
        <div style="background: #f8fafc; border-radius: 10px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #7c3aed;">
          <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Project Details</h3>
          <div style="display: grid; grid-template-columns: 140px 1fr; gap: 12px; color: #64748b;">
            <span style="font-weight: 500;">Services:</span>
            <span style="color: #1e293b;">${data.interestedServices}</span>
            <span style="font-weight: 500;">Timeline:</span>
            <span style="color: #1e293b;">${data.launchTimeline}</span>
            <span style="font-weight: 500;">Budget:</span>
            <span style="color: #16a34a; font-weight: 600;">${formattedBudget}</span>
          </div>
        </div>

        <!-- Project Description -->
        <div style="margin-bottom: 20px;">
          <h3 style="color: #1e293b; margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">Project Description</h3>
          <div style="background: #f8fafc; border-radius: 8px; padding: 15px; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0;">
            ${data.aboutProject || "No description provided"}
          </div>
        </div>

        <!-- Quick Actions -->
        <div style="margin: 20px 0;">
          <a href="mailto:${data.businessEmail}?subject=Re: ${
    data.companyName
  } Inquiry" style="display: inline-block; padding: 10px 20px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; margin-right: 10px;">Reply Now</a>
          <a href="${
            data.sourceUrl
          }" style="display: inline-block; padding: 10px 20px; background: #64748b; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">View Source</a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background: #f1f5f9; padding: 15px 30px; text-align: center; font-size: 13px; color: #64748b;">
        <p style="margin: 0;">Submission Time: ${new Date().toLocaleString()}</p>
        <p style="margin: 5px 0 0;">HackInTown Admin Panel | Contact ID: ${Math.random()
          .toString(36)
          .substr(2, 9)}</p>
      </div>
    </div>
  `;
  return htmlContent;
}

// Generate user confirmation email content
function generateUserEmailContent(name: string) {
  return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 30px; text-align: center; color: white;">
        <h1 style="margin: 0; font-size: 28px; font-weight: 600;">Thank You, ${name}!</h1>
        <p style="margin: 10px 0 0; opacity: 0.9; font-size: 16px;">We've received your inquiry</p>
      </div>

      <!-- Main Content -->
      <div style="padding: 30px;">
        <div style="text-align: center; margin-bottom: 25px;">
          <svg width="64" height="64" viewBox="0 0 24 24" style="margin: 0 auto;" fill="none" stroke="#16a34a" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        
        <div style="background: #f8fafc; border-radius: 10px; padding: 20px; text-align: center; color: #1e293b;">
          <p style="margin: 0 0 15px 0; line-height: 1.6; font-size: 16px;">
            Hello ${name},<br>
            Thank you for reaching out to HackInTown! Your submission has been successfully received.
          </p>
          <p style="margin: 0 0 15px 0; line-height: 1.6;">
            Our team is reviewing your request and will get back to you within 24-48 business hours.
          </p>
          <p style="margin: 0; line-height: 1.6;">
            Questions? Contact us at <a href="mailto:support@hackintown.com" style="color: #2563eb; text-decoration: none;">support@hackintown.com</a>
          </p>
        </div>

        <!-- CTA Button -->
        <div style="text-align: center; margin: 25px 0;">
          <a href="https://hackintown.com/services" style="display: inline-block; padding: 12px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 16px; transition: background 0.3s;">
            Explore Our Services
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background: #f1f5f9; padding: 20px; text-align: center; font-size: 13px; color: #64748b;">
        <p style="margin: 0;">HackInTown | Connecting innovation with excellence</p>
        <p style="margin: 5px 0 0;">
          <a href="https://hackintown.com" style="color: #2563eb; text-decoration: none; margin: 0 10px;">Website</a> |
          <a href="https://twitter.com/hackintown" style="color: #2563eb; text-decoration: none; margin: 0 10px;">Twitter</a> |
          <a href="https://linkedin.com/company/hackintown" style="color: #2563eb; text-decoration: none; margin: 0 10px;">LinkedIn</a>
        </p>
      </div>
    </div>
  `;
}
