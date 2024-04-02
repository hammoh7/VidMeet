import Image from "next/image";
import Link from "next/link";
import SideNavbarMobile from "./SideNavbar";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-slate-700 px-5 py-5 lg:px-10">
      <Link href="/meet" className="flex items-center gap-1">
        <Image
          src="/images/logo.jpg"
          alt="Logo"
          className="max-sm:size-10"
          width={25}
          height={25}
        />
        <p className="text-[24px] font-bold text-white max-sm:hidden">
          VidMeet
        </p>
      </Link>
      <div className="flex-between gap-5">
        <div className="h-screen">
          <UserButton />
        </div>
        <SideNavbarMobile />
      </div>
    </nav>
  );
};

export default Navbar;
