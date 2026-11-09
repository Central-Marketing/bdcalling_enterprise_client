import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for Bdcalling Enterprise.",
  path: "/terms-and-conditions",
  noindex: true,
});

// TODO: the WordPress site linked here but had no content; add the real policy text.
export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Terms & Conditions", path: "/terms-and-conditions" }])} />
      <PageHero title="Terms & Conditions" />
      <section className="container-x max-w-3xl py-20 text-lg leading-relaxed">
        <p>This page is being updated. For any questions, please contact us at <a className="font-semibold text-brand-700" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </section>
    </>
  );
}
