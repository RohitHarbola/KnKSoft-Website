import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import clientPromise from "@/lib/mongodb";
import { hashPassword, verifyPassword, signAdminToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username and password are required" },
        { status: 400 }
      );
    }

    const cleanUsername = String(username).trim();
    if (!cleanUsername) {
      return NextResponse.json(
        { success: false, message: "Valid username is required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("knksoftinfotech");
    const adminsCol = db.collection("admins");

    // Look for existing admin by username (case-insensitive)
    const existingAdmin = await adminsCol.findOne({
      username: { $regex: new RegExp(`^${cleanUsername}$`, "i") },
    });

    let authenticatedUsername = cleanUsername;

    if (existingAdmin) {
      // Existing admin: verify password
      const isValid = verifyPassword(String(password), existingAdmin.passwordHash);
      if (!isValid) {
        return NextResponse.json(
          { success: false, message: "Invalid password for admin user" },
          { status: 401 }
        );
      }

      authenticatedUsername = existingAdmin.username;

      // Update lastLogin timestamp
      await adminsCol.updateOne(
        { _id: existingAdmin._id },
        { $set: { lastLogin: new Date().toISOString() } }
      );
    } else {
      // Admin does not exist yet: store username and hashed password in MongoDB
      const passwordHash = hashPassword(String(password));
      const newAdmin = {
        username: cleanUsername,
        passwordHash,
        role: "admin",
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      };

      await adminsCol.insertOne(newAdmin);
      authenticatedUsername = cleanUsername;
    }

    // Generate JWT token
    const token = signAdminToken({
      username: authenticatedUsername,
      role: "admin",
    });

    const response = NextResponse.json({
      success: true,
      message: existingAdmin
        ? "Logged in successfully"
        : "Admin account registered and logged in successfully",
      username: authenticatedUsername,
    });

    // Set secure HTTP-only cookie valid for 24 hours
    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error in admin-login:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error during authentication" },
      { status: 500 }
    );
  }
}
