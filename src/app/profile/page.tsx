import { redirect } from "next/navigation";

export default function ProfileRedirect() {
  redirect("/admin/dashboard/profile");
}
