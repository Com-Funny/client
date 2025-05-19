import type { Metadata } from "next";
import { Gothic_A1, Eczar } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import QueryProvider from "components/layouts/provider";

export const metadata: Metadata = {
  title: "Back Office",
  description: "Convenient point of sale system",
  icons: "/favicon.ico",
};

const gothicA1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-gothic",
});

const eczar = Eczar({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-eczar",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${gothicA1.variable} ${eczar.variable}`}>
      <body
        className={`${gothicA1.className} antialiased w-screen h-screen overflow-hidden flex flex-col items-center justify-start`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
