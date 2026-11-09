import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import IndustryCard from "@/components/IndustryCard";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { industriesIntro } from "@/data/site";
import { industries } from "@/data/industries";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve",
  description: "Procurement and supply for Bangladesh's power and energy sector, RPCL, Ministry of Food, security printing organizations, Biman and CAAB.",
  path: "/industries-we-serve",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Industries We Serve", path: "/industries-we-serve" }])} />
      <PageHero eyebrow="Industries we serve" title={industriesIntro.title} text={industriesIntro.text} />
      <section className="container-x py-20 md:py-28">
        <SectionHeading center eyebrow="Government procurement entities" title={industriesIntro.lead} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (<IndustryCard key={i.slug} i={i} />))}
        </div>
      </section>
      <CTA />
    </>
  );
}
