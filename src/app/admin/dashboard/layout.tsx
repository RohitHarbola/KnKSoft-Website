import { SidebarProvider } from "@/components/ui/Admin/sidebar-provider";
import { DashboardSidebar } from "@/components/ui/Admin/dashboard-sidebar";
import { DashboardHeader } from "@/components/ui/Admin/dashboard-header";
import AdminAuthGuard from "@/components/Admin/AdminAuthGuard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthGuard
      title="Admin Dashboard Login"
      subtitle="Sign in with your MongoDB admin account to access the dashboard"
    >
      <SidebarProvider>
        <div className="flex min-h-screen flex-col">
          <DashboardHeader />
          <div className="flex flex-1">
            <DashboardSidebar />
            <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AdminAuthGuard>
  );
}
