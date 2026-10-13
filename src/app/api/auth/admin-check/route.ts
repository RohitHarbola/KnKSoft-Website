import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAdminToken } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        { authenticated: false, message: "No session token found" },
        { status: 401 }
      );
    }

    const decoded = verifyAdminToken(token);
    if (!decoded || !decoded.username) {
      return NextResponse.json(
        { authenticated: false, message: "Invalid or expired token" },
        { status: 401 }
      );
    }

    // Verify admin existence in MongoDB
    try {
      const client = await clientPromise;
      const db = client.db("knksoftinfotech");
      const admin = await db.collection("admins").findOne({
        username: { $regex: new RegExp(`^${decoded.username}$`, "i") },
      });

      if (!admin) {
        return NextResponse.json(
          { authenticated: false, message: "Admin account no longer exists" },
          { status: 401 }
        );
      }

      return NextResponse.json({
        authenticated: true,
        user: {
          username: admin.username,
          role: admin.role || "admin",
          createdAt: admin.createdAt || null,
          lastLogin: admin.lastLogin || null,
        },
      });
    } catch (dbError) {
      console.warn("MongoDB check error during auth verification, falling back to JWT:", dbError);
      return NextResponse.json({
        authenticated: true,
        user: {
          username: decoded.username,
          role: decoded.role || "admin",
        },
      });
    }
  } catch (error) {
    console.error("Error in admin-check:", error);
    return NextResponse.json(
      { authenticated: false, message: "Authentication check error" },
      { status: 500 }
    );
  }
}
