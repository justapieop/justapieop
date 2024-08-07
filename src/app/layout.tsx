import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Comfortaa } from "next/font/google";
import { Providers } from "./providers";
import { NextFont } from "next/dist/compiled/@next/font";

const font: NextFont = Comfortaa({ subsets: ["latin", "vietnamese"], preload: true });

export const metadata: Metadata = {
  title: "JustAPie Website",
  description: "JustAPie Personal Website"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
