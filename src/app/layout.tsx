import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { seoCopy } from "@/content/seo";
import { site } from "@/lib/content";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
});

const serif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-serif",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: seoCopy.home,
  applicationName: site.name,
  authors: [{ name: "Av. Zeynep Balkan" }],
  creator: site.name,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: site.name,
    description: seoCopy.home,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
