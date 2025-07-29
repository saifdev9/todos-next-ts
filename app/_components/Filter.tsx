"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentFilter = searchParams.get("quantity") || "all";

  function handleClick(val: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("quantity", val);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex justify-center mb-6">
      <ToggleGroup
        type="single"
        value={currentFilter}
        onValueChange={(val) => val && handleClick(val)}
      >
        <ToggleGroupItem value="all">All</ToggleGroupItem>
        <ToggleGroupItem value="5">Qty ≤ 5</ToggleGroupItem>
        <ToggleGroupItem value="10">Qty ≤ 10</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
