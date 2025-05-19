import Link from "next/link";
import ClientMenu from "../menus/clientMenu";
import { PageUrlConfig } from "config/page.config";

export default async function ClientHeader() {
  return (
    <header className="z-30 fixed w-full h-16 flex items-center justify-between px-4 border-b border-gray-300 bg-white">
      <div className="flex items-center justify-start gap-10">
        <Link
          href={PageUrlConfig.HOME}
          className="w-30 flex items-center justify-start"
        >
          <h1 className="font-eczar font-bold text-2xl">
            <img src="/images/logo/logo.svg" alt="comfunny logo" />
          </h1>
        </Link>
        <ClientMenu />
      </div>
      <div className="w-40 h-full flex items-center justify-end gap-4 py-3">
        <Link
          href={PageUrlConfig.SIGN_IN}
          className="w-20 h-full flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity duration-100 ease-in-out delay-0"
        >
          <p className="text-primary font-bold">로그인</p>
        </Link>
      </div>
    </header>
  );
}
