import { SidebarProvider } from "@/components/ui/Admin/sidebar-provider";
import { DashboardSidebar } from "@/components/ui/Admin/dashboard-sidebar";
import { DashboardHeader } from "@/components/ui/Admin/dashboard-header";
import AdminAuthGuard from "@/components/Admin/AdminAuthGuard";
import MobileAdminBottomNav from "@/components/ui/Admin/mobile-bottom-nav";

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
        <div className="flex min-h-screen flex-col bg-background">
          <DashboardHeader />
          <div className="flex flex-1">
            <DashboardSidebar />
            <main className="flex-1 min-w-0 max-w-full overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8 pb-20 lg:pb-8">
              {children}
            </main>
          </div>
          <MobileAdminBottomNav />
        </div>
      </SidebarProvider>
    </AdminAuthGuard>
  );
}
