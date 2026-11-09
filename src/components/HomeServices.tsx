import Link from "next/link";
import Img from "./Img";
import { services } from "@/data/services";
import { ArrowRight } from "./Icons";

export default function HomeServices() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container-x">
        {/* Heading */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">Our services</p>
            <h2 className="mt-3 text-3xl font-bold md:text-[2.75rem] md:leading-[1.1]">
              Services <span className="text-brand-700">without limits</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start xl:flex-row xl:items-end">
            <p className="max-w-md text-lg leading-relaxed">
              From tender strategy to on-site installation, one accountable partner across the full procurement lifecycle.
            </p>
            <Link href="/services" className="btn-primary shrink-0">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Cards */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            return (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl p-6 shadow-lg shadow-brand-900/10 ring-1 ring-brand-900/5 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/25 sm:aspect-[4/5] lg:aspect-[3/4.4]"
                >
                  <Img
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    className="-z-20 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950 via-brand-950/70 to-brand-950/10 transition-colors duration-500 group-hover:via-brand-900/80" />

                  <div>
                    <h3 className="text-xl font-semibold leading-snug text-white">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-100/85">{s.short}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
