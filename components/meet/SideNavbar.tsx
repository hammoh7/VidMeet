"use client";

import { ListPlusIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { sidebarConstants } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SideNavbarMobile = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[248px]">
      <Sheet>
        <SheetTrigger asChild>
          <ListPlusIcon
            width={30}
            height={30}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-slate-600">
          <Link href="/meet" className="flex items-center gap-1">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              className="max-sm:size-10"
              width={25}
              height={25}
            />
            <p className="text-[24px] font-bold text-white">VidMeet</p>
          </Link>
          <div className="flex h-[calc(100vh-70px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-5 pt-14 text-white">
                {sidebarConstants.map((link) => {
                  const isActive = pathname === link.route;
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-3 items-center p-3 rounded-md w-full max-w-60 hover:bg-gray-600",
                          { "bg-blue-800 hover:bg-blue-950": isActive }
                        )}
                      >
                        <Image
                          src={link.imageUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default SideNavbarMobile;
