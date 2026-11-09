import Link from "next/link";
import Img from "./Img";
import type { Industry } from "@/data/industries";
import { ArrowRight } from "./Icons";

export default function IndustryCard({ i }: { i: Industry }) {
  return (
    <Link href={`/industries-we-serve/${i.slug}`} className="card group flex flex-col p-6">
      <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-100">
        <Img src={i.image} alt={`${i.title} logo`} fill sizes="300px" className={i.imageKind === "logo" ? "object-contain p-4" : "object-cover"} />
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-snug group-hover:text-brand-700">{i.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed">{i.short}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
    </Link>
  );
}
