import Link from "next/link";
import Img from "./Img";
import type { Service } from "@/data/services";
import { ArrowRight, serviceIcon } from "./Icons";

export default function ServiceCard({ s, index }: { s: Service; index: number }) {
  const Icon = serviceIcon[s.icon];
  return (
    <Link href={`/services/${s.slug}`} className="card group flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Img src={s.image} alt={s.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-800">0{index + 1}</span>
        <span className="absolute -bottom-6 right-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white shadow-lg ring-4 ring-white"><Icon className="h-6 w-6" /></span>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-8">
        <h3 className="text-lg font-semibold leading-snug group-hover:text-brand-700">{s.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed">{s.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
      </div>
    </Link>
  );
}
