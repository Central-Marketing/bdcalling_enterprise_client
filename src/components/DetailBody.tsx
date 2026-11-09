import Link from "next/link";
import Img from "./Img";
import type { Section } from "@/data/services";
import { site } from "@/data/site";
import { ArrowRight, Check, Mail, Phone } from "./Icons";

type Item = { slug: string; title: string };

export default function DetailBody({ image, imageKind = "photo", intro, sections, closing, siblings, base, siblingsTitle, current }: {
  image: string; imageKind?: "photo" | "logo"; intro: string[]; sections: Section[]; closing?: string; siblings: Item[]; base: string; siblingsTitle: string; current: string;
}) {
  return (
    <section className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-12">
      <article className="lg:col-span-8">
        <div className={`relative mb-10 overflow-hidden rounded-2xl ${imageKind === "logo" ? "flex h-56 items-center justify-center bg-slate-50 ring-1 ring-slate-200" : "aspect-[16/9]"}`}>
          <Img src={image} alt="" fill sizes="(min-width:1024px) 60vw, 100vw" className={imageKind === "logo" ? "object-contain p-10" : "object-cover"} />
        </div>
        <div className="space-y-5 text-lg leading-relaxed">
          {intro.map((p, i) => (<p key={i} className={i === 0 ? "text-xl text-ink" : ""}>{p}</p>))}
        </div>
        {sections.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sections.map((sec) => (
              <div key={sec.heading} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                <h2 className="text-lg font-semibold">{sec.heading}</h2>
                {sec.text && <p className="mt-3 text-sm leading-relaxed">{sec.text}</p>}
                {sec.items && (
                  <ul className="mt-4 space-y-3">
                    {sec.items.map((it) => (
                      <li key={it} className="flex gap-3 text-[15px] leading-relaxed">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700"><Check className="h-3 w-3" /></span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
        {closing && <p className="mt-12 border-l-4 border-brand-600 pl-6 text-lg leading-relaxed text-ink">{closing}</p>}
      </article>

      <aside className="space-y-6 lg:col-span-4">
        <div className="sticky top-32 space-y-6">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">{siblingsTitle}</h2>
            <ul className="mt-4 space-y-1">
              {siblings.map((s) => (
                <li key={s.slug}>
                  <Link href={`${base}/${s.slug}`} className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium ${s.slug === current ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-brand-50 hover:text-brand-700"}`}>
                    {s.title}<ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-brand-900 p-6 text-brand-100">
            <h2 className="text-xl font-semibold text-white">Need expert support?</h2>
            <p className="mt-2 text-sm">Our procurement specialists are ready to help with your next project.</p>
            <a href={`tel:${site.phoneIntl}`} className="mt-5 flex items-center gap-3 text-sm hover:text-white"><Phone className="h-4 w-4 text-accent-400" />{site.phone}</a>
            <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-3 text-sm hover:text-white"><Mail className="h-4 w-4 text-accent-400" />{site.email}</a>
            <Link href="/contact-us?type=consultation#contact-form" className="btn-light mt-6 w-full">Request Consultation</Link>
          </div>
        </div>
      </aside>
    </section>
  );
}
