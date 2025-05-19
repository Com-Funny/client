import { ReactNode } from "react";
import ClientHeader from "components/layouts/client/clientHeader";
import { Metadata } from "next";
import { clientMetadata } from "config/site.config";
import ClientFooter from "components/layouts/client/clientFooter";

export const metadata: Metadata = clientMetadata;

export default function IntroLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="w-full h-full max-h-screen overflow-y-auto">
      <ClientHeader />
      <div className="w-full h-max flex flex-col items-center justify-start pt-16">
        {children}
        <ClientFooter />
      </div>
    </section>
  );
}
