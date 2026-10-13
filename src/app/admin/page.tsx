"use client";

import AdminLogin from "@/components/Admin/login";

export default function AdminLoginPage() {
  return (
    <AdminLogin
      title="Admin Portal"
      subtitle="Sign in with your MongoDB admin credentials"
      redirectUrl="/admin/dashboard"
    />
  );
}
