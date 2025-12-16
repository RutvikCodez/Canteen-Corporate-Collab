import SalesChart from "@/components/admin/SalesChart";
import StatCard from "@/components/admin/StatCard";
import TopSellingItems from "@/components/admin/TopSellingItems";
import { statCardData } from "@/constants/data";

const page = () => {
  return (
    <main className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here&apos;s what&apos;s happening at your restaurant.
        </p>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
        {statCardData.map((card, index) => (
          <StatCard key={index} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
        <SalesChart />
        <TopSellingItems />
      </div>
    </main>
  );
};

export default page;
