import AdminFooter from "components/layouts/admin/adminFooter";
import IntroHeader from "components/layouts/admin/introHeader";
import { ReactNode } from "react";

export default function IntroLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="w-full h-full max-h-screen overflow-y-auto">
      <IntroHeader />
      {children}
      <AdminFooter />
    </section>
  );
}
