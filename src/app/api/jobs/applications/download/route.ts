import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return new NextResponse("Application ID is required", { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("knksoftinfotech");

    let app;
    try {
      app = await db.collection("job_applications").findOne({ _id: new ObjectId(id) });
    } catch {
      app = await db.collection("job_applications").findOne({ id });
    }

    if (!app) {
      return new NextResponse("Application not found", { status: 404 });
    }

    const fileName = app.resumeFileName || `${(app.fullName || "Candidate").replace(/\s+/g, "_")}_Resume.pdf`;
    const mimeType = app.resumeMimeType || "application/pdf";

    if (app.resumeBase64) {
      const buffer = Buffer.from(app.resumeBase64, "base64");
      return new NextResponse(buffer, {
        headers: {
          "Content-Type": mimeType,
          "Content-Disposition": `attachment; filename="${fileName}"`,
          "Content-Length": buffer.length.toString(),
        },
      });
    }

    // Fallback: Generate a clean formatted candidate profile document if raw base64 is missing
    const docContent = `KNK SOFT INFOTECH - CANDIDATE RESUME & APPLICATION DOSSIER
========================================================================
Candidate Name : ${app.fullName}
Applied Position: ${app.jobTitle || "Job Opening"}
Email Address  : ${app.email}
Phone Number   : ${app.phone || "Not specified"}
Experience     : ${app.experience || "Not specified"}
Application Date: ${app.createdAt || new Date().toISOString()}

------------------------------------------------------------------------
COVER LETTER / STATEMENT OF PURPOSE:
------------------------------------------------------------------------
${app.coverLetter || "No cover letter provided."}

========================================================================
Status: Verified by KNK Soft Infotech Recruitment Portal
`;

    const textFileName = fileName.endsWith(".pdf") ? fileName.replace(/\.pdf$/i, ".txt") : fileName;
    const textBuffer = Buffer.from(docContent, "utf-8");

    return new NextResponse(textBuffer, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": `attachment; filename="${textFileName}"`,
        "Content-Length": textBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error downloading resume:", error);
    return new NextResponse("Error downloading resume", { status: 500 });
  }
}
