import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import DetailBody from "@/components/DetailBody";
import CTA from "@/components/CTA";
import { getService, services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  return s ? pageMetadata({ title: s.title, description: s.short, path: `/services/${s.slug}`, image: `/services/${s.slug}/opengraph-image` }) : {};
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }]), serviceSchema(s)]} />
      <PageHero eyebrow="Service" title={s.title} text={s.short} image={s.image} />
      <DetailBody image={s.image} intro={s.intro} sections={s.sections} closing={s.closing} siblings={services} base="/services" siblingsTitle="Our services" current={s.slug} />
      <CTA />
    </>
  );
}
