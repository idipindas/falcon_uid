import React from "react";
import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTopWrapper from "@/components/ui/ScrollToTopWrapper";


const inter = Inter({ subsets: ["latin"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Falconsupplychain",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rajdhani.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTopWrapper />
      </body>
    </html>
  );
}