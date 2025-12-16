import MobileSidebar from "@/components/admin/MobileSidebar";
import Sidebar from "@/components/admin/Sidebar";
import TopBar from "@/components/admin/TopBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 grid grid-cols-[15fr_85fr]">
      <Sidebar />
      <MobileSidebar />
      <div>
        <TopBar />
        {children}
      </div>
    </div>
  );
}
