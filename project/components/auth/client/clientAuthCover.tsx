import { clientSiteConfig } from "config/site.config";

export default function ClientAuthCover() {
  return (
    <section className="w-full bg-primary relative flex flex-col items-center justify-center py-24">
      <div className="flex flex-col items-center justify-center gap-2 z-10">
        <h1 className="font-eczar font-bold text-6xl">
          {clientSiteConfig.title}
        </h1>
        <p className="font-medium text-xl whitespace-pre-wrap text-center">
          {clientSiteConfig.description}
        </p>
      </div>
      <img
        alt="back office login cover image"
        src="/images/cover/computer.svg"
        className="absolute bottom-16 w-160 opacity-80"
      />
    </section>
  );
}
