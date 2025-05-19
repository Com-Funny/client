import { adminSiteConfig } from "config/site.config";

export default function AdminAuthCover() {
  return (
    <section className="w-full bg-primary relative flex flex-col items-center justify-start py-24">
      <img
        alt="back office login cover image"
        src="/images/working.png"
        className="w-200 h-160 absolute left-8 bottom-0 object-cover opacity-70"
      />
      <img
        alt="back office login cover image"
        src="/images/gear.png"
        className="w-140 absolute left-48 top-0 opacity-10 animate-spin-slow"
      />
      <img
        alt="back office login cover image"
        src="/images/gear.png"
        className="w-80 absolute left-8 top-0 opacity-10 animate-spin-slow"
      />
      <img
        alt="back office login cover image"
        src="/images/gear.png"
        className="w-120 absolute right-8 top-24 opacity-10 animate-spin-slow"
      />
      <img
        alt="back office login cover image"
        src="/images/gear.png"
        className="w-40 absolute right-80 top-120 opacity-10 animate-spin-slow"
      />
      <img
        alt="back office login cover image"
        src="/images/gear.png"
        className="w-62 absolute right-8 bottom-32 opacity-10 animate-spin-slow"
      />
      <div className="flex flex-col items-center justify-center gap-2 z-10">
        <h1 className="font-eczar font-bold text-6xl">
          {adminSiteConfig.title}
        </h1>
        <p className="font-medium text-xl">{adminSiteConfig.description}</p>
      </div>
    </section>
  );
}
