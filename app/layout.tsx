import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volleyball",
  description: "Manage your volleyball points!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-MPLENJLFK2" />
    </html>
  );
}
