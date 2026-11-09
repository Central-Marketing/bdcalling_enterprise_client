import Link from "next/link";
import Img from "./Img";
import { industries } from "@/data/industries";
import { ArrowRight } from "./Icons";

export default function HomeIndustries() {
  const featured = industries.find((i) => i.imageKind === "photo") ?? industries[0];
  const rest = industries.filter((i) => i !== featured);

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container-x">
        {/* Heading */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">Industries we serve</p>
            <h2 className="mt-3 text-3xl font-bold md:text-[2.75rem] md:leading-[1.1]">
              Delivering impact <span className="text-brand-700">where it matters most</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-end">
            <p className="max-w-md text-lg leading-relaxed">
              We collaborate with essential government bodies and national sectors to deliver purpose-driven solutions.
            </p>
            <Link href="/industries-we-serve" className="btn-primary shrink-0">
              All industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Featured sector */}
          <Link
            href={`/industries-we-serve/${featured.slug}`}
            className="group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl p-8 shadow-lg shadow-brand-900/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/25 lg:col-span-5"
          >
            <Img
              src={featured.image}
              alt=""
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950 via-brand-950/60 to-transparent" />
            <span className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md transition duration-300 group-hover:bg-accent-500 group-hover:ring-accent-400">
              <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">Core sector</p>
            <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">{featured.title}</h3>
            <p className="mt-3 max-w-md leading-relaxed text-brand-100/90">{featured.short}</p>
          </Link>

          {/* Entities */}
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {rest.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/industries-we-serve/${i.slug}`}
                  className="group relative flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-100">
                      <Img src={i.image} alt={`${i.title} logo`} fill sizes="64px" className="object-contain p-2" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition duration-300 group-hover:bg-brand-700 group-hover:text-white">
                      <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug group-hover:text-brand-700">{i.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{i.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
