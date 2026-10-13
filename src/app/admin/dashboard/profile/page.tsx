"use client";

import { useState, useEffect } from "react";
import {
  User,
  Shield,
  Key,
  Database,
  Calendar,
  Clock,
  CheckCircle2,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  Save,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { toast } from "react-hot-toast";

interface AdminUser {
  username: string;
  role: string;
  createdAt?: string | null;
  lastLogin?: string | null;
}

export default function AdminProfilePage() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Password change state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch("/api/auth/admin-check");
      if (response.ok) {
        const data = await response.json();
        if (data.authenticated && data.user) {
          setUser(data.user);
        }
      }
    } catch (error) {
      console.error("Failed to fetch admin profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Please fill in all password fields");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("New password must be at least 6 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirmation do not match");
      return;
    }

    setSavingPassword(true);

    try {
      const response = await fetch("/api/auth/admin-change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(data.message || "Password updated successfully in MongoDB!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        toast.error(data.message || "Failed to update password");
      }
    } catch (err) {
      console.error("Error updating password:", err);
      toast.error("Network error while updating password");
    } finally {
      setSavingPassword(false);
    }
  };

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return "Current session";
    try {
      return new Date(dateStr).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Admin Profile
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your administrator identity, database access, and security credentials.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Profile Card */}
        <Card className="lg:col-span-1 shadow-sm border-gray-200">
          <CardHeader className="text-center pb-3">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600 ring-4 ring-red-50">
              <User className="h-10 w-10" />
            </div>
            <CardTitle className="mt-4 text-xl font-bold text-gray-900">
              {loading ? "Loading..." : user?.username || "Administrator"}
            </CardTitle>
            <CardDescription className="flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-600">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verified MongoDB Admin
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-2">
            <div className="divide-y divide-gray-100 text-sm">
              <div className="flex items-center justify-between py-2.5">
                <span className="text-gray-500 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gray-400" /> Role
                </span>
                <span className="font-semibold text-gray-800 capitalize">
                  {user?.role || "System Admin"}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="text-gray-500 flex items-center gap-2">
                  <Database className="h-4 w-4 text-gray-400" /> Database
                </span>
                <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                  knksoftinfotech
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="text-gray-500 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" /> Registered
                </span>
                <span className="text-xs text-gray-700">
                  {formatDate(user?.createdAt)}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="text-gray-500 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" /> Last Login
                </span>
                <span className="text-xs text-gray-700">
                  {formatDate(user?.lastLogin)}
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-emerald-50 p-3 text-xs text-emerald-800 border border-emerald-200">
              <p className="font-semibold mb-0.5">Session Status: Active</p>
              <p className="text-emerald-700">
                Authenticated with HTTP-only 24h JWT cookie stored securely.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Change Password Card */}
        <Card className="lg:col-span-2 shadow-sm border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-red-50 text-red-600">
                <Key className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Change Admin Password</CardTitle>
                <CardDescription>
                  Update your MongoDB admin account credentials securely.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter your current password"
                    className="w-full px-3.5 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Minimum 6 characters"
                      className="w-full px-3.5 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter new password"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={savingPassword}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-60"
                >
                  {savingPassword ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Updating in MongoDB...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Update Password
                    </>
                  )}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Permissions & Scope */}
      <Card className="shadow-sm border-gray-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-lg">Administrator Privileges & Scope</CardTitle>
              <CardDescription>
                System permissions granted to your administrative role.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3 text-sm">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <p className="font-semibold text-gray-900 mb-1">Career & Job Listings</p>
              <p className="text-xs text-gray-600">
                Full authority to create, edit, publish, and delete job postings on the careers portal.
              </p>
              <span className="inline-block mt-3 text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">
                Full Control
              </span>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <p className="font-semibold text-gray-900 mb-1">Blog CMS Management</p>
              <p className="text-xs text-gray-600">
                Author, edit, publish blog articles, upload media, and moderate public comments.
              </p>
              <span className="inline-block mt-3 text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">
                Full Control
              </span>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <p className="font-semibold text-gray-900 mb-1">Enquiries & SMTP Alerts</p>
              <p className="text-xs text-gray-600">
                Receive contact-us form submissions and manage automated recipient addresses.
              </p>
              <span className="inline-block mt-3 text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">
                Full Control
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
