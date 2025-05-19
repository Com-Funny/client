import { PageUrlConfig } from "config/page.config";
import { clientSiteConfig } from "config/site.config";
import Link from "next/link";

export default async function ClientFooter() {
  return (
    <footer className="w-full h-16 flex items-center justify-between px-4 bg-card text-sm shrink-0">
      <div className="w-[348px] h-full flex flex-col items-start justify-center">
        <p className="text-gray font-semibold">
          © 2025 {clientSiteConfig.title}
        </p>
        <p className="text-gray font-medium">
          CONTACT US : {clientSiteConfig.contactNumber}
        </p>
      </div>
      <h1 className="font-eczar text-lg font-semibold">
        <img
          src={clientSiteConfig.logo.src}
          alt={`${clientSiteConfig.title}_logo`}
        />
      </h1>
      <div className="w-[348px] h-full flex items-center justify-end gap-4">
        <p className="text-gray font-semibold">
          <Link href={PageUrlConfig.TERMS}>Terms of Service</Link>
        </p>
        <p className="text-gray font-semibold">
          <Link href={PageUrlConfig.PRIVACY}>Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}
