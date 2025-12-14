"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

const SearchFood = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="relative flex-1 border-2 rounded-md border-primary">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        placeholder="Search menu items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};

export default SearchFood;
