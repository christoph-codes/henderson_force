import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import "./globals.css";
import SideNavProvider from "@/providers/SideNavProvider";

const industry = localFont({
  src: [
    {
      path: "./fonts/IndustryTest-UltraItalic.otf",
      weight: "700",
      style: "italic",
    },
    { path: "./fonts/IndustryTest-Ultra.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-industry",
});
const gothic = localFont({
  src: [
    {
      path: "./fonts/GOTHIC.woff2",
      weight: "400",
      style: "normal",
    },
    { path: "./fonts/GOTHICB.woff2", weight: "700", style: "bold" },
  ],
  variable: "--font-gothic",
});

export const metadata: Metadata = {
  title: "Henderson Force",
  description: "The official Henderson Force website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray">
      <body
        className={`${industry.variable} ${gothic.variable} overflow-x-hidden`}
      >
        <SideNavProvider>{children}</SideNavProvider>
        <GoogleAnalytics gaId="G-QSLY8W3JJ5" />
      </body>
    </html>
  );
}
