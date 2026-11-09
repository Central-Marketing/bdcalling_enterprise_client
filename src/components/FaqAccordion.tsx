"use client";
import { useId, useState } from "react";
import { ChevronDown } from "./Icons";

/** One-open-at-a-time accordion with a smooth height animation (grid-rows 0fr → 1fr). */
export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${uid}-q${i}`;
        const panelId = `${uid}-a${i}`;
        return (
          <div key={f.q} className="py-2">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-4 text-left font-display text-lg font-semibold text-ink transition-colors hover:text-brand-700"
              >
                {f.q}
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "rotate-180 bg-brand-700 text-white" : "bg-slate-100 text-slate-600"}`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-14 leading-relaxed">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
