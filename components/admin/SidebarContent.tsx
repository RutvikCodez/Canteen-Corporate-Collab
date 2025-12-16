"use client";
import { navigation } from "@/constants/data";
import { cn } from "@/lib/utils";
import { BarChart3 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarContent = () => {
  const pathname = usePathname();
  return (
    <aside className="flex flex-col h-full">
      <div className="flex items-center px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="bg-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">
            FoodOrder Admin
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
            //   onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors gap-3",
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <item.icon />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="px-6 py-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">© 2024 FoodOrder Platform</p>
      </div>
    </aside>
  );
};

export default SidebarContent;
