import type { Metadata } from "next";
import { Suspense } from "react";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { contactIntro, site } from "@/data/site";
import { Clock, Facebook, Instagram, Linkedin, Mail, Phone, Pin } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: "Contact Bdcalling Enterprise in Banasree, Dhaka for government tender, RFQ, OEM spare parts and turnkey supply support. Call 01335202929 or email us.",
  path: "/contact-us",
});

export default function ContactPage() {
  const info = [
    { I: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { I: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneIntl}` },
    { I: Pin, label: "Office", value: site.address },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact Us", path: "/contact-us" }])} />
      <PageHero eyebrow="Contact us" title={contactIntro.title} text={contactIntro.text} />
      <section className="container-x grid gap-10 py-20 md:py-28 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          {info.map(({ I, label, value, href }) => (
            <div key={label} className="flex gap-4 rounded-2xl border border-slate-200 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><I className="h-5 w-5" /></span>
              <div>
                <p className="text-sm font-medium text-slate-500">{label}</p>
                {href ? <a href={href} className="mt-1 block font-semibold text-ink hover:text-brand-700">{value}</a> : <p className="mt-1 font-semibold text-ink">{value}</p>}
              </div>
            </div>
          ))}
          <div className="rounded-2xl bg-brand-950 p-6 text-brand-100">
            <p className="flex items-center gap-2 font-semibold text-white"><Clock className="h-5 w-5 text-accent-400" /> Business hours</p>
            <dl className="mt-4 space-y-2 text-sm">
              {site.hours.map((h) => (<div key={h.days} className="flex justify-between gap-4"><dt>{h.days}</dt><dd className="font-medium text-white">{h.time}</dd></div>))}
            </dl>
            <div className="mt-6 flex gap-3 border-t border-white/10 pt-6">
              {[{ h: site.social.linkedin, I: Linkedin, l: "LinkedIn" }, { h: site.social.facebook, I: Facebook, l: "Facebook" }, { h: site.social.instagram, I: Instagram, l: "Instagram" }].map(({ h, I, l }) => (
                <a key={l} href={h} target="_blank" rel="noopener" aria-label={l} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-brand-600 hover:text-white"><I className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
        </div>
        <div id="contact-form" className="relative scroll-mt-28 rounded-3xl border border-slate-200 p-6 shadow-xl shadow-brand-900/5 sm:p-10 lg:col-span-3">
          <h2 className="text-2xl font-bold">Send us a message or request a consultation</h2>
          <p className="mt-2">We&apos;re here to answer your questions and respond within one business day.</p>
          <div className="mt-8"><Suspense><ContactForm /></Suspense></div>
        </div>
      </section>
      <section className="container-x pb-20">
        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <iframe title="Office location" src="https://www.google.com/maps?q=Daisy+Garden,+Block+A,+Banasree,+Dhaka+1219&output=embed" className="h-96 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </>
  );
}
