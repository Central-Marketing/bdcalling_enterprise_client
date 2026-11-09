import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import LegalDocument from "@/components/LegalDocument";
import { termsIntro, termsSections, termsUpdated } from "@/data/terms";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "The terms that govern use of the Bdcalling Enterprise website, including enquiries, intellectual property, liability and governing law.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Terms & Conditions", path: "/terms-and-conditions" }])} />
      <PageHero eyebrow="Legal" title="Terms & Conditions" text={`Last updated: ${termsUpdated}`} />
      <LegalDocument intro={termsIntro} sections={termsSections} ctaTitle="Questions about these terms?" />
    </>
  );
}
