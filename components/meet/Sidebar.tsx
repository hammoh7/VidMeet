"use client";

import { sidebarConstants } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-slate-500 p-5 pt-32 text-white max-sm:hidden lg:w-[250px]">
      <div className="flex flex-1 flex-col gap-2">
        {sidebarConstants.map((link) => {
          const isActive =
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-3 items-center p-3 rounded-md justify-start hover:bg-gray-600",
                { "bg-blue-800 hover:bg-blue-950": isActive }
              )}
            >
              <Image
                src={link.imageUrl}
                alt={link.label}
                width={20}
                height={20}
              />
              <p className="text-md font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
