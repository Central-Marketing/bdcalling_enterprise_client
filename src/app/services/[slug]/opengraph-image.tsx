import { renderOg, ogSize, ogContentType } from "@/lib/og";
import { getService, services } from "@/data/services";

export const alt = "Bdcalling Enterprise service";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  return renderOg({ eyebrow: "Our services", title: s?.title ?? "Our services" });
}
