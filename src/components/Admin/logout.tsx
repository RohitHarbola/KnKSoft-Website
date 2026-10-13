"use client";

import { useState } from "react";
import { LogOut, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";

export interface LogoutProps {
  variant?: "header" | "sidebar" | "dropdown" | "button" | "compact";
  className?: string;
  showIcon?: boolean;
  showText?: boolean;
  redirectTo?: string;
  onLogout?: () => void;
  isCollapsed?: boolean;
  label?: string;
}

export default function AdminLogout({
  variant = "button",
  className,
  showIcon = true,
  showText = true,
  redirectTo = "/admin",
  onLogout,
  isCollapsed = false,
  label = "Logout",
}: LogoutProps) {
  const [loading, setLoading] = useState(false);

  const handleLogout = async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (loading) return;

    setLoading(true);
    try {
      const response = await fetch("/api/auth/admin-logout", {
        method: "POST",
      });

      if (response.ok) {
        toast.success("Logged out successfully");
      }
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      if (onLogout) {
        onLogout();
      }
      // Redirect to clear admin session state completely
      window.location.href = redirectTo;
    }
  };

  // Header button variant (prominent, styled for top navigation bar)
  if (variant === "header") {
    return (
      <button
        type="button"
        onClick={handleLogout}
        disabled={loading}
        title="Sign out of admin session"
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-red-600 hover:text-white bg-red-50 hover:bg-red-600 rounded-lg border border-red-200 hover:border-red-600 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-60 disabled:cursor-not-allowed",
          className
        )}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin text-red-600 group-hover:text-white" />
        ) : (
          showIcon && <LogOut className="w-4 h-4 shrink-0" />
        )}
        {showText && <span>{loading ? "Logging out..." : label}</span>}
      </button>
    );
  }

  // Sidebar item variant (integrates seamlessly into dashboard sidebar lists)
  if (variant === "sidebar") {
    return (
      <li className="relative">
        <button
          type="button"
          onClick={handleLogout}
          disabled={loading}
          title="Sign out of admin account"
          className={cn(
            "flex w-full items-center justify-start px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors group disabled:opacity-60",
            isCollapsed && "justify-center px-2",
            className
          )}
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin text-red-600 shrink-0" />
          ) : (
            showIcon && (
              <LogOut className="h-5 w-5 text-red-600 group-hover:text-red-700 shrink-0" />
            )
          )}
          {!isCollapsed && showText && (
            <span className="ml-3 font-medium text-red-600 group-hover:text-red-700">
              {loading ? "Logging out..." : label}
            </span>
          )}
        </button>
      </li>
    );
  }

  // Dropdown menu item variant (for avatar or action menus)
  if (variant === "dropdown") {
    return (
      <button
        type="button"
        onClick={handleLogout}
        disabled={loading}
        className={cn(
          "w-full flex items-center gap-2 px-2 py-1.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded cursor-pointer text-left transition-colors font-medium",
          className
        )}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : (
          showIcon && <LogOut className="w-4 h-4 shrink-0" />
        )}
        {showText && <span>{loading ? "Logging out..." : label}</span>}
      </button>
    );
  }

  // Compact icon-only variant
  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={handleLogout}
        disabled={loading}
        title={label}
        className={cn(
          "p-2 text-red-600 hover:text-white hover:bg-red-600 rounded-lg border border-red-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500",
          className
        )}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <LogOut className="w-4 h-4" />
        )}
      </button>
    );
  }

  // Standard standalone button variant
  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-60",
        className
      )}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        showIcon && <LogOut className="w-4 h-4 shrink-0" />
      )}
      {showText && <span>{loading ? "Logging out..." : label}</span>}
    </button>
  );
}

export { AdminLogout as Logout };
