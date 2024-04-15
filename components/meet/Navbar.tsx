import Link from "next/link";
import SideNavbarMobile from "./SideNavbar";
import { UserButton } from "@clerk/nextjs";
import { Video } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-slate-700 px-5 py-5 lg:px-10">
      <Link href="/meet" className="flex items-center gap-1">
        <Video className="h-8 w-8 text-white mr-2" />
        <p className="text-[24px] font-bold text-white max-sm:hidden">
          VidMeet
        </p>
      </Link>
      <div className="flex-between gap-5">
        <div className="flex items-center justify-center mr-2 w-4 h-4">
          <UserButton afterSignOutUrl="/" />
        </div>
        <SideNavbarMobile />
      </div>
    </nav>
  );
};

export default Navbar;
