import { ReactNode } from "react";
import localFont from "next/font/local";
import "styles/globals.style.css";
import "reflect-metadata";
import favicon from "public/images/logo/dark-background.png";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata = {
  title: "트래플피씨 | Travel PC",
  description: "컴퓨터 판매 전문 트래플피씨",
  icons: {
    icon: favicon.src,
  },
  robots: "index, follow",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body className={`antialiased ${pretendard.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
