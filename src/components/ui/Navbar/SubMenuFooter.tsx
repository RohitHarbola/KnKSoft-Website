"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubMenuFooterProps {
  className?: string;
  text?: string;
  href?: string;
}

const SubMenuFooter = ({ className, text, href }: SubMenuFooterProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 py-3 bg-red-50",
        className
      )}
    >
      <div className="text-base">
        {text || "Ready to get started?"}{" "}
        <Link
          href={href || "/contact"}
          className="font-semibold text-red-500 hover:text-red-600 transition-colors"
        >
          Let&apos;s Talk
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Link
          href="mailto:clientsupport@sparxit.com"
          className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors"
        >
          <Mail className="h-4 w-4" />
          clientsupport@sparxit.com
        </Link>

        <Link
          href="tel:+919810230650"
          className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors"
        >
          <Phone className="h-4 w-4" />
          +91 9810-230650
        </Link>
      </div>
    </div>
  );
};

export default SubMenuFooter;
