import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Mara Ulloa's research website",
  description: "Mara Ulloa's research website",
  keywords: [
    "Obsmara, Obsmara Ulloa, Mara Ulloa, HCI researcher, PhD student, participatory research, community-based, CS PhD Student, CS Student, Computer Science student, Northwestern PhD student",
  ],
  title: "Mara Ulloa - CS PhD Student, Northwestern University",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "dark",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col justify-between px-4 md:px-48">
          {children}
        </main>
      </body>
    </html>
  );
}
