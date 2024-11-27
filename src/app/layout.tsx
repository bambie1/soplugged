import "./globals.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoPlugged",
  description: "Empowering Black entrepreneurs & creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.className} scroll-m-30 flex min-h-screen flex-col overflow-auto !overflow-x-hidden bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
