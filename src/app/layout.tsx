import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/app/components/header";
import { BackToTop, Footer } from "@/components";

const futura = localFont({
  src: [
    {
      path: '../../public/font/futura_pt_book.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/font/futura_pt_bold.ttf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../../public/font/futura_pt_heavy.ttf',
      weight: '600',
      style: 'bold'
    },
  ]
})

export const metadata: Metadata = {
  applicationName: "Mara Ulloa's research website",
  description: "Mara Ulloa's research website",
  keywords: [
    "Obsmara, Obsmara Ulloa, Mara Ulloa, HCI researcher, PhD Candidate, participatory research, community-based, CS PhD Candidate, CS Student, Computer Science student, Northwestern PhD Candidate",
  ],
  title: "Mara Ulloa - CS PhD Candidate, Northwestern University",
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
    <html className="dark" lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
        />
      </head>
      <body className={`${futura.className} bg-eggshell dark:bg-navy`}>
        <Header />
        <main className="flex min-h-screen flex-col justify-between px-4 md:px-48 bg-eggshell dark:bg-navy">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <GoogleAnalytics gaId="G-44TH6ZEKWM" />
      </body>
    </html>
  );
}
