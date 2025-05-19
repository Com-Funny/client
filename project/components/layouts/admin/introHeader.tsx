import Link from "next/link";
import IntroMenu from "components/layouts/menus/introMenu";
import { PageUrlConfig } from "config/page.config";

export default async function IntroHeader() {
  return (
    <header className="z-30 fixed w-full h-16 flex items-center justify-between px-4 border-b border-gray-300 bg-white">
      <Link
        href={PageUrlConfig.HOME}
        className="w-40 flex items-center justify-center"
      >
        <h1 className="font-eczar font-bold text-2xl">BACK OFFICE</h1>
      </Link>
      <IntroMenu />
      <div className="w-40 h-full flex items-center gap-4 py-3">
        <button className="w-20 h-full flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity duration-100 ease-in-out delay-0">
          <p className="text-primary font-bold">CONTACT</p>
        </button>
        <Link
          href={PageUrlConfig.SIGN_IN}
          className="w-20 h-full flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity duration-100 ease-in-out delay-0"
        >
          <p className="text-primary font-bold">SIGN IN</p>
        </Link>
      </div>
    </header>
  );
}
