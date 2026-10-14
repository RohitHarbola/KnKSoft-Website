"use client";

import { useState, useEffect } from "react";
import AdminLogin from "@/components/Admin/login";
import { Loader2 } from "lucide-react";

interface AdminAuthGuardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function AdminAuthGuard({
  children,
  title = "Admin Portal Login",
  subtitle = "Please authenticate with your MongoDB admin account",
}: AdminAuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/admin-check");
      if (response.ok) {
        const data = await response.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          return;
        }
      }
      setIsAuthenticated(false);
    } catch (err) {
      console.error("Auth check failed:", err);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
          <p className="text-sm font-medium text-slate-300">
            Verifying administrative authorization...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <AdminLogin
        title={title}
        subtitle={subtitle}
        onSuccess={() => setIsAuthenticated(true)}
      />
    );
  }

  return <>{children}</>;
}
