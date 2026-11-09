import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import Img from "@/components/Img";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { leaders, leadershipIntro } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Leadership & Oversight",
  description: "Meet the leadership of Bdcalling Enterprise, supported by a Dhaka, USA and Dubai-based procurement and documentation team.",
  path: "/leadership-oversight",
});

export default function LeadershipPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Leadership & Oversight", path: "/leadership-oversight" }])} />
      <PageHero eyebrow="Leadership & oversight" title="The people behind every bid" text={leadershipIntro} />
      <section className="container-x py-20 md:py-28">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
          {leaders.map((l) => (
            <article
              key={l.name}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-brand-900/10 ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/15"
            >
              <div className="relative aspect-[4/4.2] overflow-hidden bg-white">
                {l.image ? (
                  <Img
                    src={l.image}
                    alt={`${l.name}, ${l.role}`}
                    fill
                    sizes="(min-width:640px) 440px, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-32 w-32 items-center justify-center rounded-full bg-brand-50 font-display text-5xl font-bold text-brand-700 ring-1 ring-brand-100">
                      {l.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </span>
                )}
              </div>
              <div className="border-t border-slate-100 p-7 sm:p-8">
                <span className="block h-0.5 w-10 bg-accent-500 transition-all duration-500 group-hover:w-16" />
                <h2 className="mt-5 text-2xl font-bold sm:text-[1.7rem]">{l.name}</h2>
                <p className="mt-1.5 text-sm font-semibold uppercase tracking-wider text-brand-600">{l.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
