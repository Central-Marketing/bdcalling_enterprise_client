import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { absUrl } from "@/lib/seo";

type Entry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; image?: string };

// Privacy Policy and Terms are left out (and noindexed) until they have real content.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8, changeFrequency: "monthly" as const, image: s.image })),
    { path: "/industries-we-serve", priority: 0.8, changeFrequency: "monthly" },
    ...industries.map((i) => ({ path: `/industries-we-serve/${i.slug}`, priority: 0.7, changeFrequency: "monthly" as const, image: i.image })),
    { path: "/about-us", priority: 0.7, changeFrequency: "yearly" },
    { path: "/leadership-oversight", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact-us", priority: 0.7, changeFrequency: "yearly" },
  ];
  const lastModified = new Date();
  return entries.map((e) => ({
    url: absUrl(e.path),
    lastModified,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
    ...(e.image && { images: [absUrl(e.image)] }),
  }));
}
