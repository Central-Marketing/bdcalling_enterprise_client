import Link from "next/link";
import { site } from "@/data/site";
import { ArrowRight, Mail } from "./Icons";

export type LegalBlock = string | { list: string[] };
export type LegalSection = { id: string; title: string; body: LegalBlock[] };

function Block({ b }: { b: LegalBlock }) {
  if (typeof b === "string") return <p className="leading-relaxed">{b}</p>;
  return (
    <ul className="space-y-3">
      {b.list.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Shared layout for legal pages: sticky table of contents + numbered sections + contact card. */
export default function LegalDocument({ intro, sections, ctaTitle }: { intro: string; sections: LegalSection[]; ctaTitle: string }) {
  return (
    <section className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
      <aside className="lg:col-span-4">
        <nav aria-label="On this page" className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">On this page</p>
          <ol className="mt-4 space-y-1">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="flex gap-3 rounded-lg px-2 py-1.5 text-sm text-slate-600 transition hover:bg-white hover:text-brand-700">
                  <span className="w-5 shrink-0 font-display font-semibold text-slate-400">{i + 1}.</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>

      <article className="lg:col-span-8">
        <p className="text-lg leading-relaxed text-ink">{intro}</p>

        <div className="mt-12 space-y-12">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 border-t border-slate-200 pt-10 first:border-0 first:pt-0">
              <h2 className="flex gap-3 text-2xl font-bold">
                <span className="text-brand-300">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="mt-5 space-y-4">
                {s.body.map((b, j) => (<Block key={j} b={b} />))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 rounded-3xl bg-brand-950 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-bold text-white">{ctaTitle}</p>
            <a href={`mailto:${site.email}`} className="mt-2 inline-flex items-center gap-2 text-brand-100 hover:text-white">
              <Mail className="h-4 w-4 text-accent-400" /> {site.email}
            </a>
          </div>
          <Link href="/contact-us" className="btn-light shrink-0">Contact us <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </article>
    </section>
  );
}
