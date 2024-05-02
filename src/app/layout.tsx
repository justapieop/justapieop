import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const raleway = Raleway({ subsets: ["latin", "vietnamese"] });

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
      <body className={raleway.className}>
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
