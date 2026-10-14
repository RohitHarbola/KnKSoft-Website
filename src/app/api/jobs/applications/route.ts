import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET /api/jobs/applications?jobId=...
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get("jobId");

    const client = await clientPromise;
    const db = client.db("knksoftinfotech");
    const applicationsCol = db.collection("job_applications");

    const jobTitle = searchParams.get("jobTitle");
    const fetchAll = searchParams.get("all") === "true";

    let filter: Record<string, any> = {};
    if (jobId && !fetchAll && jobId !== "all") {
      const trimmedJobId = String(jobId).trim();
      const orConditions: any[] = [
        { jobId: jobId },
        { jobId: trimmedJobId },
      ];
      if (ObjectId.isValid(trimmedJobId)) {
        orConditions.push({ jobId: new ObjectId(trimmedJobId) });
      }
      if (jobTitle && jobTitle.trim()) {
        orConditions.push({ jobTitle: new RegExp(`^${jobTitle.trim()}$`, "i") });
      }
      filter.$or = orConditions;
    }

    const applications = await applicationsCol
      .find(filter)
      .sort({ createdAt: -1 })
      .toArray();

    // Map _id to string and provide safe resume download URL
    const formatted = applications.map((app) => ({
      _id: app._id.toString(),
      jobId: app.jobId,
      jobTitle: app.jobTitle || "Job Opening",
      fullName: app.fullName,
      email: app.email,
      phone: app.phone,
      experience: app.experience,
      coverLetter: app.coverLetter || "",
      resumeFileName: app.resumeFileName || `${app.fullName.replace(/\s+/g, "_")}_Resume.pdf`,
      resumeMimeType: app.resumeMimeType || "application/pdf",
      resumeUrl: `/api/jobs/applications/download?id=${app._id.toString()}`,
      createdAt: app.createdAt || new Date().toISOString(),
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Error fetching job applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}

// POST /api/jobs/applications (Handles application submission)
export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let applicationData: Record<string, unknown> = {};

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const resumeFile = formData.get("resume") as File | null;

      let resumeBase64 = "";
      let resumeFileName = "Resume.pdf";
      let resumeMimeType = "application/pdf";

      if (resumeFile && typeof resumeFile !== "string") {
        resumeFileName = resumeFile.name || "Resume.pdf";
        resumeMimeType = resumeFile.type || "application/pdf";
        const bytes = await resumeFile.arrayBuffer();
        resumeBase64 = Buffer.from(bytes).toString("base64");
      }

      applicationData = {
        jobId: String(formData.get("jobId") || ""),
        jobTitle: String(formData.get("jobTitle") || ""),
        fullName: String(formData.get("fullName") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        experience: String(formData.get("experience") || ""),
        coverLetter: String(formData.get("coverLetter") || ""),
        resumeFileName,
        resumeMimeType,
        resumeBase64,
        createdAt: new Date().toISOString(),
      };
    } else {
      const body = await request.json();
      applicationData = {
        jobId: String(body.jobId || ""),
        jobTitle: String(body.jobTitle || ""),
        fullName: String(body.fullName || ""),
        email: String(body.email || ""),
        phone: String(body.phone || ""),
        experience: String(body.experience || ""),
        coverLetter: String(body.coverLetter || ""),
        resumeFileName: body.resumeFileName || "Candidate_Resume.pdf",
        resumeMimeType: body.resumeMimeType || "application/pdf",
        resumeBase64: body.resumeBase64 || "",
        createdAt: new Date().toISOString(),
      };
    }

    if (!applicationData.fullName || !applicationData.email || !applicationData.jobId) {
      return NextResponse.json(
        { error: "Full name, email, and jobId are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("knksoftinfotech");
    const result = await db.collection("job_applications").insertOne(applicationData);

    return NextResponse.json({
      success: true,
      id: result.insertedId.toString(),
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting job application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
