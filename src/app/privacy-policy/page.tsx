import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import LegalDocument from "@/components/LegalDocument";
import { privacyIntro, privacySections, privacyUpdated } from "@/data/privacy";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Bdcalling Enterprise collects, uses and protects personal information submitted through our website, and the choices and rights you have.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy-policy" }])} />
      <PageHero eyebrow="Legal" title="Privacy Policy" text={`Last updated: ${privacyUpdated}`} />
      <LegalDocument intro={privacyIntro} sections={privacySections} ctaTitle="Questions about your data?" />
    </>
  );
}
