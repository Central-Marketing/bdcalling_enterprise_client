import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import Img from "@/components/Img";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { about, leadershipIntro, pillars, site } from "@/data/site";
import { services } from "@/data/services";
import { ArrowRight, Award, Check, Globe, Shield, Users } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: "Bdcalling Enterprise is a Dhaka-based procurement partner for government tenders, OEM spare parts indenting, RFQ management and turnkey supply in Bangladesh.",
  path: "/about-us",
});
const icons = [Award, Users, Globe, Shield];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About Us", path: "/about-us" }])} />
      <PageHero eyebrow="About us" title="Integrity and precision in public procurement" text={site.tagline} />

      <section className="container-x grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Who we are" title="Procurement · Government Tenders · OEM Supply Solutions" />
          <p className="mt-6 text-lg leading-relaxed">{about.intro}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug} className="flex items-center gap-3 font-medium text-ink"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700"><Check className="h-3.5 w-3.5" /></span>{s.title}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl"><Img src="/images/about-office.jpg" alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
          <div className="rounded-3xl bg-brand-700 p-6 text-white"><p className="font-display text-4xl font-extrabold">100%</p><p className="mt-2 text-sm text-brand-100">{about.achievement}</p></div>
          <div className="rounded-3xl bg-slate-100 p-6"><p className="font-display text-4xl font-extrabold text-brand-700">3</p><p className="mt-2 text-sm">Team locations: Dhaka, USA &amp; Dubai</p></div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Our values" title="What sets us apart" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => { const I = icons[i]; return (
              <div key={p.title} className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><I className="h-6 w-6" /></span>
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed">{p.text}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <p className="eyebrow">Leadership &amp; oversight</p>
            <p className="mt-3 text-xl text-ink">{leadershipIntro}</p>
          </div>
          <Link href="/leadership-oversight" className="btn-primary shrink-0">Meet our leadership <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
