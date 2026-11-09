import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const defaultTitle = `${site.name} | ${site.tagline} in Bangladesh`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Business",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
    title: defaultTitle,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: defaultTitle, description: site.description },
  // Local (geographic) signals
  other: {
    "geo.region": "BD-13",
    "geo.placename": "Dhaka",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b4a8b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
