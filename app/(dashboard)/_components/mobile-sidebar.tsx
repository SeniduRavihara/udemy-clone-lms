import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";

function MobileSidebar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="md:hidden hover:opacity-75 transition">
          <Menu size={22} className="text-red-400" />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
export default MobileSidebar;
