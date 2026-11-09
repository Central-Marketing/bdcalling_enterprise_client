import { renderOg, ogSize, ogContentType } from "@/lib/og";
import { getIndustry, industries } from "@/data/industries";

export const alt = "Industry served by Bdcalling Enterprise";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() { return industries.map((i) => ({ slug: i.slug })); }

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const i = getIndustry((await params).slug);
  return renderOg({ eyebrow: "Industries we serve", title: i?.title ?? "Industries we serve" });
}
