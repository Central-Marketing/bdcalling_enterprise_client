import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, servicesListSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import { servicesIntro } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: "Government tender and RFQ strategy, OEM spare parts indenting, turnkey supply and installation, and compliance documentation for Bangladesh.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Services", path: "/services" }]), servicesListSchema(services)]} />
      <PageHero eyebrow="Services" title={servicesIntro.title} text={servicesIntro.text} />
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (<ServiceCard key={s.slug} s={s} index={i} />))}
        </div>
      </section>
      <CTA />
    </>
  );
}
