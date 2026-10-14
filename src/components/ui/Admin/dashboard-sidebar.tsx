"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  CircleUser,
  Cog,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Book,
  Briefcase,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSidebar } from "@/components/ui/Admin/sidebar-provider";
import AdminLogout from "@/components/Admin/logout";

interface NavItemProps {
  title: string;
  href: string;
  icon: React.ElementType;
  isActive?: boolean;
  children?: React.ReactNode;
  onNavigate?: () => void;
}

function NavItem({
  title,
  href,
  icon: Icon,
  isActive,
  children,
  onNavigate,
}: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = Boolean(children);

  return (
    <li className="relative">
      {hasChildren ? (
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center justify-between px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground",
            isActive && "bg-muted font-medium text-foreground"
          )}
          rightIcon={
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isOpen && "rotate-180"
              )}
            />
          }
        >
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5" />
            <span>{title}</span>
          </div>
        </Button>
      ) : (
        <Link href={href} onClick={onNavigate}>
          <Button
            variant="ghost"
            leftIcon={<Icon className="h-5 w-5" />}
            className={cn(
              "flex w-full items-center justify-start px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
              isActive && "bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100 hover:text-blue-700"
            )}
          >
            <span className="ml-3">{title}</span>
          </Button>
        </Link>
      )}
      {hasChildren && isOpen && (
        <ul className="ml-4 mt-1 border-l pl-2">{children}</ul>
      )}
    </li>
  );
}

export function DashboardSidebar() {
  const pathname = usePathname();
  const { isOpen, close } = useSidebar();

  const handleNavClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      close();
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden"
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col border-r bg-background shadow-2xl transition-transform duration-300 ease-in-out lg:static lg:z-20 lg:w-64 lg:max-w-none lg:shadow-none lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex h-14 items-center justify-between border-b px-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold hover:opacity-85 transition-opacity group cursor-pointer"
            onClick={handleNavClick}
            title="Go to Home Screen"
          >
            <Package className="h-6 w-6 text-blue-600 group-hover:scale-105 transition-transform" />
            <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              KNK Soft Admin
            </span>
          </Link>
          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={close}
            className="p-1.5 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors lg:hidden"
            title="Close sidebar"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Content */}
        <ScrollArea className="flex-1 py-2">
          <nav className="space-y-1 px-2">
            <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Core Management
            </div>
            <ul className="space-y-1">
              <NavItem
                title="Dashboard"
                href="/admin/dashboard"
                icon={LayoutDashboard}
                isActive={pathname === "/admin/dashboard"}
                onNavigate={handleNavClick}
              />
              <NavItem
                title="Careers"
                href="/admin/dashboard/careers"
                icon={Briefcase}
                isActive={pathname.startsWith("/admin/dashboard/careers")}
                onNavigate={handleNavClick}
              />
              <NavItem
                title="Blog CMS"
                href="/admin/dashboard/blogcms"
                icon={Book}
                isActive={pathname.startsWith("/admin/dashboard/blogcms")}
                onNavigate={handleNavClick}
              />
            </ul>

            <div className="my-3 border-t" />

            <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Preferences & Support
            </div>
            <ul className="space-y-1">
              <NavItem
                title="Settings"
                href="/admin/dashboard/settings"
                icon={Cog}
                isActive={pathname.startsWith("/admin/dashboard/settings")}
                onNavigate={handleNavClick}
              />
              <NavItem
                title="Help & Support"
                href="/admin/dashboard/support"
                icon={LifeBuoy}
                isActive={pathname.startsWith("/admin/dashboard/support")}
                onNavigate={handleNavClick}
              />
              <NavItem
                title="Profile"
                href="/admin/dashboard/profile"
                icon={CircleUser}
                isActive={pathname.startsWith("/admin/dashboard/profile")}
                onNavigate={handleNavClick}
              />
              <AdminLogout variant="sidebar" />
            </ul>
          </nav>
        </ScrollArea>

        {/* Bottom Profile & Logout Section */}
        <div className="border-t bg-muted/20 p-3">
          <div className="flex items-center justify-between gap-2">
            <Link
              href="/admin/dashboard/profile"
              onClick={handleNavClick}
              className="flex items-center gap-2.5 overflow-hidden hover:opacity-80 transition-opacity"
              title="Manage Admin Profile"
            >
              <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 ring-1 ring-blue-200">
                AD
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-gray-900 truncate">Admin Account</span>
                <span className="text-[10px] text-blue-600 font-medium truncate flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  Active Session
                </span>
              </div>
            </Link>
            <AdminLogout variant="compact" />
          </div>
        </div>
      </aside>
    </>
  );
}
