import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("knksoftinfotech");
    const jobs = await db.collection("jobs").find({}).toArray();
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const job = await request.json();
    const client = await clientPromise;
    const db = client.db("knksoftinfotech");

    // Add timestamps
    const jobWithTimestamps = {
      ...job,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await db.collection("jobs").insertOne(jobWithTimestamps);
    return NextResponse.json({
      success: true,
      id: result.insertedId,
      message: "Job created successfully",
    });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 }
    );
  }
}
