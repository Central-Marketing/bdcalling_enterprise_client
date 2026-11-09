import Link from "next/link";
import { leadershipIntro, pillars } from "@/data/site";
import { ArrowRight, Award, Globe, Shield, Users } from "./Icons";

const icons = [Award, Users, Globe, Shield];

export default function HomeWhyUs() {
  return (
    <section className="bg-brand-950 py-20 md:py-28">
      <div className="container-x">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow text-accent-400">Why Bdcalling Enterprise</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-[2.75rem] md:leading-[1.1]">
              Operational excellence, <span className="text-accent-400">focused on procurement</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-brand-100/85">{leadershipIntro}</p>
            <Link href="/leadership-oversight" className="group mt-6 inline-flex items-center gap-2 font-semibold text-white hover:text-accent-400">
              Meet our leadership
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Pillars */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const I = icons[i];
            return (
              <li
                key={p.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/[0.06]"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent-400 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700 text-white transition-colors duration-300 group-hover:bg-accent-500">
                  <I className="h-6 w-6" />
                </span>
                <h3 className="mt-8 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-brand-200/90">{p.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
