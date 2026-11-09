import Link from "next/link";
import Img from "@/components/Img";
import CTA from "@/components/CTA";
import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import HomeWhyUs from "@/components/HomeWhyUs";
import HomeIndustries from "@/components/HomeIndustries";
import HomeFAQ from "@/components/HomeFAQ";
import SectionHeading from "@/components/SectionHeading";
import { about } from "@/data/site";
import { industries } from "@/data/industries";
import { ArrowRight } from "@/components/Icons";
const steps = [
  { t: "Identify", d: "Continuous tracking of relevant tenders and RFQs across government portals." },
  { t: "Prepare", d: "Technically sound, compliant and competitive bid documentation." },
  { t: "Submit", d: "Full e-GP support: registration, DSC setup, uploads and submission." },
  { t: "Deliver", d: "OEM sourcing, logistics and supervised installation through to commissioning." },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Trusted by strip */}
      <section className="border-b border-slate-200 bg-white py-14 md:py-16">
        <div className="container-x">
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 sm:text-sm">Serving government procurement entities across Bangladesh</p>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {industries.filter((i) => i.imageKind === "logo").map((i) => (
              <li key={i.slug}>
                <Link href={`/industries-we-serve/${i.slug}`} className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5">
                  <span className="relative h-16 w-full sm:h-20">
                    <Img src={i.image} alt={i.title} fill sizes="(min-width:768px) 160px, 40vw" className="object-contain transition-transform duration-300 group-hover:scale-105" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-ink group-hover:text-brand-700">{i.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="container-x grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Img src="/images/about-team.jpg" alt="Bdcalling Enterprise team in discussion" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 max-w-[240px] rounded-2xl bg-white p-5 shadow-2xl shadow-brand-900/15 ring-1 ring-slate-100 sm:right-8">
            <p className="font-display text-3xl font-extrabold text-brand-700">100%</p>
            <p className="mt-1 text-sm font-medium text-ink">{about.achievement}</p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="About us" title="A procurement partner built on integrity and precision" />
          <div className="mt-5 flex flex-wrap gap-2">
            {about.focus.map((f) => (<span key={f} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">{f}</span>))}
          </div>
          <p className="mt-6 text-lg leading-relaxed">{about.intro}</p>
          <Link href="/about-us" className="btn-primary mt-8">Learn More <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <HomeServices />

      <HomeWhyUs />

      {/* Process */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading center eyebrow="How we work" title="From tender notice to commissioning" />
        <ol className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="relative">
              {i < steps.length - 1 && <span className="absolute left-14 right-0 top-6 hidden h-px bg-gradient-to-r from-brand-300 to-transparent md:block" />}
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 font-display text-lg font-bold text-white shadow-lg shadow-brand-700/30">{i + 1}</span>
              <h3 className="mt-5 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <HomeIndustries />

      <HomeFAQ />

      <CTA />
    </>
  );
}
