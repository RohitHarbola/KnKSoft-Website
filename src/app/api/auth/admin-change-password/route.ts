import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAdminToken, hashPassword, verifyPassword } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: No active admin session" },
        { status: 401 }
      );
    }

    const decoded = verifyAdminToken(token);
    if (!decoded || !decoded.username) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: Invalid session token" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { success: false, message: "Both current password and new password are required" },
        { status: 400 }
      );
    }

    if (String(newPassword).length < 6) {
      return NextResponse.json(
        { success: false, message: "New password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("knksoftinfotech");
    const adminsCol = db.collection("admins");

    const admin = await adminsCol.findOne({
      username: { $regex: new RegExp(`^${decoded.username}$`, "i") },
    });

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Admin account not found" },
        { status: 404 }
      );
    }

    const isValidCurrent = verifyPassword(String(currentPassword), admin.passwordHash);
    if (!isValidCurrent) {
      return NextResponse.json(
        { success: false, message: "Current password is incorrect" },
        { status: 400 }
      );
    }

    const newPasswordHash = hashPassword(String(newPassword));
    await adminsCol.updateOne(
      { _id: admin._id },
      {
        $set: {
          passwordHash: newPasswordHash,
          updatedAt: new Date().toISOString(),
        },
      }
    );

    return NextResponse.json({
      success: true,
      message: "Password updated successfully in MongoDB",
    });
  } catch (error) {
    console.error("Error in admin-change-password:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error while updating password" },
      { status: 500 }
    );
  }
}
