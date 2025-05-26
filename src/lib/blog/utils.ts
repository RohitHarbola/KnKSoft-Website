import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncate(
  str: string | undefined | null,
  length: number
): string {
  if (!str) return "";
  const stripped = str.replace(/<[^>]*>/g, "");
  return stripped.length > length
    ? stripped.slice(0, length) + "..."
    : stripped;
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export const generateSlug = (title: string): string => {
  return encodeURIComponent(
    title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim()
  );
};