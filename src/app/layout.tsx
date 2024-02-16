import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/header";
import { BackToTop, Footer } from "@/components";

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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} bg-eggshell dark:bg-navy`}>
        <Header />
        <main className="flex min-h-screen flex-col justify-between px-4 md:px-48 bg-eggshell dark:bg-navy">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
