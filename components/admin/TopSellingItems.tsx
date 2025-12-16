import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { topItems } from "@/constants/data";
import TopItem from "./TopItem";

const TopSellingItems = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Selling Items</CardTitle>
        <CardDescription>Most popular items this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {topItems.map((item, index) => (
            <TopItem key={index} {...item} number={index + 1} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSellingItems;
