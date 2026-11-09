import type { Metadata } from "next";
import { site } from "@/data/site";

/** Absolute URL for a site path ("/services" -> "https://bdcallingenterprise.com/services"). */
export const absUrl = (path = "/") => new URL(path, site.url).toString();

type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Defaults to the site-wide share card. Routes with their own opengraph-image file override this. */
  image?: string;
  noindex?: boolean;
};

const DEFAULT_IMAGE = { url: "/opengraph-image", width: 1200, height: 630 };

/** Per-page metadata: title, description, canonical URL, Open Graph and Twitter cards. */
export function pageMetadata({ title, description, path, image, noindex }: PageSeo): Metadata {
  const images = [image ? { url: image, alt: title } : { ...DEFAULT_IMAGE, alt: `${title} | ${site.name}` }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url: path,
      title: `${title} | ${site.name}`,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images,
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
