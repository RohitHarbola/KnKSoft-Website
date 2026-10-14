"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Book,
  CircleUser,
  Menu,
} from "lucide-react";
import { useSidebar } from "@/components/ui/Admin/sidebar-provider";
import { cn } from "@/lib/utils";

export default function MobileAdminBottomNav() {
  const pathname = usePathname();
  const { toggle, isOpen } = useSidebar();

  const navTabs = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
      isActive: pathname === "/admin/dashboard",
    },
    {
      title: "Careers",
      href: "/admin/dashboard/careers",
      icon: Briefcase,
      isActive: pathname.startsWith("/admin/dashboard/careers"),
    },
    {
      title: "Blog CMS",
      href: "/admin/dashboard/blogcms",
      icon: Book,
      isActive: pathname.startsWith("/admin/dashboard/blogcms"),
    },
    {
      title: "Profile",
      href: "/admin/dashboard/profile",
      icon: CircleUser,
      isActive: pathname.startsWith("/admin/dashboard/profile"),
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-30 flex h-16 items-center justify-around border-t border-gray-200 bg-white/95 px-2 backdrop-blur-md shadow-lg lg:hidden"
      aria-label="Mobile Admin Navigation"
    >
      {navTabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "flex flex-col items-center justify-center gap-1 py-1 px-2.5 rounded-lg text-[11px] font-medium transition-colors",
              tab.isActive
                ? "text-blue-600 font-bold"
                : "text-gray-500 hover:text-gray-900"
            )}
          >
            <Icon
              className={cn(
                "h-5 w-5 transition-transform active:scale-95",
                tab.isActive ? "text-blue-600" : "text-gray-500"
              )}
            />
            <span className="truncate max-w-[64px]">{tab.title}</span>
          </Link>
        );
      })}

      <button
        type="button"
        onClick={toggle}
        className={cn(
          "flex flex-col items-center justify-center gap-1 py-1 px-2.5 rounded-lg text-[11px] font-medium transition-colors",
          isOpen ? "text-blue-600 font-bold" : "text-gray-500 hover:text-gray-900"
        )}
        title="Open full admin sidebar menu"
        aria-label="Open sidebar menu"
      >
        <Menu
          className={cn(
            "h-5 w-5 transition-transform active:scale-95",
            isOpen ? "text-blue-600" : "text-gray-500"
          )}
        />
        <span>Menu</span>
      </button>
    </nav>
  );
}
