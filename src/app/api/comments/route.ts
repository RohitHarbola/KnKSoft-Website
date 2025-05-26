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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const blogPostId = searchParams.get('blogPostId');
    
    await connectToDatabase();
    const collection = db.collection("comments");

    const query = blogPostId ? { blogPostId } : {};
    const comments = await collection
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { blogPostId, author, content } = await request.json();

    if (!blogPostId || !author || !content) {
      return NextResponse.json(
        { error: "Blog post ID, author, and content are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const collection = db.collection("comments");

    const result = await collection.insertOne({
      blogPostId,
      author,
      content,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
