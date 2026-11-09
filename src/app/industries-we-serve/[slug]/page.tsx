import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, industrySchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import DetailBody from "@/components/DetailBody";
import CTA from "@/components/CTA";
import { getIndustry, industries } from "@/data/industries";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return industries.map((i) => ({ slug: i.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const i = getIndustry((await params).slug);
  return i ? pageMetadata({ title: i.title, description: i.short, path: `/industries-we-serve/${i.slug}`, image: `/industries-we-serve/${i.slug}/opengraph-image` }) : {};
}

export default async function IndustryPage({ params }: Props) {
  const i = getIndustry((await params).slug);
  if (!i) notFound();
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Industries We Serve", path: "/industries-we-serve" }, { name: i.title, path: `/industries-we-serve/${i.slug}` }]), industrySchema(i)]} />
      <PageHero eyebrow="Industry" title={i.title} text={i.short} />
      <DetailBody image={i.image} imageKind={i.imageKind} intro={i.intro} sections={i.sections} closing={i.closing} siblings={industries} base="/industries-we-serve" siblingsTitle="Industries we serve" current={i.slug} />
      <CTA />
    </>
  );
}
