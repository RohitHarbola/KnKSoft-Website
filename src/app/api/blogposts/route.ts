import { NextRequest, NextResponse } from "next/server";
import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

let db: Db;

async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("knksoftinfotech");
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const collection = db.collection("posts");

    const posts = await collection
      .find(
        {},
        {
          projection: { title: 1, content: 1, tags: 1, image: 1, createdAt: 1 },
        }
      )
      .sort({ createdAt: -1 })
      .limit(20)
      .toArray();

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tags = JSON.parse((formData.get("tags") as string) || "[]");
    const image = formData.get("image") as File | null;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    let imagePath = "";
    if (image) {
      imagePath = await saveImage(image);
    }

    await connectToDatabase();
    const collection = db.collection("posts");

    const result = await collection.insertOne({
      title,
      content,
      tags,
      image: imagePath,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

async function saveImage(image: File): Promise<string> {
  try {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString("base64");
    return `data:${image.type};base64,${base64Image}`;
  } catch (error) {
    console.error("Error converting image to base64:", error);
    throw new Error(`Failed to process image: ${(error as Error).message}`);
  }
}
