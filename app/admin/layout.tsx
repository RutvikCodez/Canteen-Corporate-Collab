import MobileSidebar from "@/components/admin/MobileSidebar";
import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gray-50 grid grid-cols-[4fr_1fr] gap-4">
    <Sidebar />
    <MobileSidebar />
    {children}
  </div>;
};

