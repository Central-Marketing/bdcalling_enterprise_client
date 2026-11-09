import Link from "next/link";
import Img from "./Img";
import { ArrowRight } from "./Icons";

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950">
      {/* Background layers */}
      <Img src="/images/hero-buildings.jpg" alt="" fill priority sizes="100vw" className="-z-30 object-cover opacity-50" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-brand-950 via-brand-950/80 to-brand-950/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent-400/40 to-transparent" />

      <div className="container-x py-20 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1
            className="animate-fade-up text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance text-white sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
          >
            Procurement &amp; supply partner for Bangladesh&apos;s{" "}
            <span className="relative sm:whitespace-nowrap">
              <span className="bg-gradient-to-r from-accent-400 via-sky-300 to-brand-300 bg-clip-text text-transparent">critical infrastructure</span>
              <svg aria-hidden viewBox="0 0 300 12" preserveAspectRatio="none" className="absolute -bottom-2 left-0 hidden h-2.5 w-full text-accent-400/60 sm:block">
                <path d="M2 9C60 3 140 1 298 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-brand-100/90" style={{ animationDelay: "160ms" }}>
            Government tenders, RFQ management, OEM spare parts indenting and turnkey supply, delivered with integrity and precision for the power, energy and infrastructure sectors.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
            <Link href="/contact-us" className="btn-light group px-7 py-3.5 shadow-xl shadow-black/20">
              Get in Touch <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="btn-ghost px-7 py-3.5 backdrop-blur">Explore Services</Link>
          </div>

        </div>
      </div>
    </section>
  );
}
