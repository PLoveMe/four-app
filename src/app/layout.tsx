import type { Metadata } from "next";
import "./globals.css";

import Heaer from '@/components/Header';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DUYI store",
  description: "a simply store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Heaer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
