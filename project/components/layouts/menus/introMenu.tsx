"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function IntroMenu() {
  const pathname = usePathname();
  const menuList = [
    { name: "INTRODUCE", path: "/" },
    { name: "TABLES", path: "/products" },
    { name: "LIVECHAT", path: "/sales" },
  ];

  return (
    <ul className="h-full flex items-center gap-6 font-semibold">
      {menuList.map((menu) => {
        const isActive = pathname === menu.path;

        return (
          <li
            key={`menu_${menu.name}`}
            className="h-full hover:opacity-70 transition-opacity duration-100 ease-in-out relative will-change-auto delay-0"
          >
            <Link
              href={menu.path}
              className="h-full flex items-center justify-center"
            >
              <p
                className={`transition-all duration-200 ease-in-out relative will-change-auto ${
                  isActive ? "border-b-2 border-primary text-primary" : ""
                }`}
              >
                {menu.name}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
