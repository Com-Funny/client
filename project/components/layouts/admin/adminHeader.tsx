import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "components/buttons/logoutButton";
import AdminMenu from "components/layouts/menus/adminMenu";
import { PageUrlConfig } from "config/page.config";

export default async function AdminHeader() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-4 border-b border-gray-300 bg-white">
      <Link
        href={PageUrlConfig.HOME}
        className="w-40 h-full flex items-center justify-center"
      >
        <h1 className="font-eczar font-bold text-2xl">BACK OFFICE</h1>
      </Link>
      <AdminMenu />
      <div className="w-[88px] h-full flex items-center gap-4">
        <button className="w-9 h-full flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity duration-100 ease-in-out delay-0">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="w-8 !h-8"
            color="#a994d5"
          />
        </button>
        <LogoutButton>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="w-7 !h-7"
            color="#888888"
          />
        </LogoutButton>
      </div>
    </header>
  );
}
