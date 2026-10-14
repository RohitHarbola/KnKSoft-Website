"use client";

import Link from "next/link";
import { Bell, Menu, Package, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/Admin/sidebar-provider";
import AdminLogout from "@/components/Admin/logout";

export function DashboardHeader() {
  const { toggle } = useSidebar();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-2 sm:gap-4 border-b bg-background px-3 sm:px-6">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden h-9 w-9 text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-gray-300 shadow-xs"
          onClick={toggle}
          title="Toggle Navigation Menu"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold shrink-0 hover:opacity-80 transition-opacity cursor-pointer group"
          title="Go to Home Screen"
        >
          <Package className="h-5 w-5 text-blue-600 group-hover:scale-105 transition-transform" />
          <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            KNK Soft
          </span>
        </Link>
      </div>

      <div className="relative hidden md:block md:w-64 lg:w-80">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search admin dashboard..."
          className="w-full rounded-lg bg-background pl-8 border border-gray-300 h-9 text-xs sm:text-sm focus-visible:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <Button variant="outline" size="icon" className="rounded-full h-8 w-8 sm:h-9 sm:w-9 text-gray-600 hover:text-blue-600 hover:bg-blue-50">
          <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <AdminLogout variant="header" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0 ring-2 ring-transparent hover:ring-blue-300 transition-all">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-blue-100 text-blue-700 font-bold text-xs">AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Admin Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/admin/dashboard/profile" className="cursor-pointer w-full">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/admin/dashboard/careers" className="cursor-pointer w-full">
                Careers & Resumes
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/admin/dashboard/blogcms" className="cursor-pointer w-full">
                Blog CMS
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/admin/dashboard/settings" className="cursor-pointer w-full">
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/admin/dashboard/support" className="cursor-pointer w-full">
                Help & Support
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer p-0">
              <AdminLogout variant="dropdown" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
