"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";

export default function AppNavbar() {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="flex p-4 border-b md:hidden gap-2 w-full">
      <Button
        variant="outline"
        size={"icon"}
        onClick={toggleSidebar}
        className="flex"
      >
        <ChevronRight size={30} />
      </Button>
    </div>
  );
}
