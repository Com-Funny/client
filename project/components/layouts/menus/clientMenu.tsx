"use client";

import { PageUrlConfig } from "config/page.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientMenu() {
  const pathname = usePathname();
  const menuList = [
    { name: "컴퓨터", path: PageUrlConfig.COMPUTER },
    { name: "이벤트", path: PageUrlConfig.EVENTS },
    { name: "전시관", path: PageUrlConfig.SHOWCASE },
    { name: "견적짜기", path: PageUrlConfig.QUOTE },
    { name: "커뮤니티", path: PageUrlConfig.COMMUNITY },
    { name: "미디어", path: PageUrlConfig.MEDIA },
    { name: "고객지원", path: PageUrlConfig.CONTACT },
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
                className={`text-base font-medium transition-all duration-200 ease-in-out relative will-change-auto ${
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
