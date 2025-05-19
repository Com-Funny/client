import "../globals.css";
import { ReactNode } from "react";
import AdminHeader from "components/layouts/admin/adminHeader";
import AdminFooter from "components/layouts/admin/adminFooter";

export default function ServiceLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="w-full h-full">
      <AdminHeader />
      <div className="w-full h-[calc(100vh-64px)] flex flex-col overflow-y-auto">
        {children}
        <AdminFooter />
      </div>
    </section>
  );
}
