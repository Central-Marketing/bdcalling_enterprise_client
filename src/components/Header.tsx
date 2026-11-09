"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/data/site";
import { ChevronDown, Close, Facebook, Instagram, Linkedin, Mail, Menu, Phone } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideTop, setHideTop] = useState(false);

  useEffect(() => {
    // Hysteresis so the collapsing top bar can't make the threshold flicker.
    const on = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHideTop((h) => (h ? y > 4 : y > 48));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  // While the drawer is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div
        aria-hidden={hideTop}
        className={`hidden overflow-hidden bg-brand-950 text-[13px] text-brand-100 transition-[max-height,opacity] duration-300 ease-out md:block ${hideTop ? "pointer-events-none max-h-0 opacity-0" : "max-h-10 opacity-100"}`}
      >
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" />{site.email}</a>
            <a href={`tel:${site.phoneIntl}`} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" />{site.phone}</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-brand-300">{site.tagline}</span>
            <span className="h-4 w-px bg-white/15" />
            <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-white"><Facebook className="h-4 w-4" /></a>
            <a href={site.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-4 w-4" /></a>
            <a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-white"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`border-b bg-white/90 backdrop-blur-lg transition-shadow ${scrolled ? "border-slate-200 shadow-sm" : "border-transparent"}`}>
        <div className="container-x flex h-[72px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link href={item.href} className={`flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${active(item.href) || item.children.some((c) => active(c.href)) ? "text-brand-700" : "text-slate-700 hover:text-brand-700"}`}>
                    {item.label}<ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <div className="w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-brand-900/10">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${active(c.href) ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-slate-50 hover:text-brand-700"}`}>{c.label}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${active(item.href) ? "text-brand-700" : "text-slate-700 hover:text-brand-700"}`}>{item.label}</Link>
              ),
            )}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/contact-us?type=consultation#contact-form" className="btn-primary hidden sm:inline-flex">Request Consultation</Link>
            <button onClick={() => setOpen(true)} className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden" aria-label="Open menu" aria-expanded={open}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

      </div>

      {/* Mobile drawer (outside the blurred bar so `fixed` is relative to the viewport) */}
      <div className={`fixed inset-0 z-[60] transition-[visibility] duration-300 lg:hidden ${open ? "visible" : "invisible"}`} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-brand-950/50 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-[72px] items-center justify-between border-b border-slate-100 px-5">
            <Logo className="h-9" />
            <button onClick={() => setOpen(false)} className="rounded-lg p-2 text-slate-700 hover:bg-slate-100" aria-label="Close menu">
              <Close className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                      <ul className="space-y-1">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className={`block rounded-xl px-3 py-3 font-medium ${active(c.href) ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-slate-50"}`}>{c.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link href={item.href} className={`block rounded-xl px-3 py-3 font-medium ${active(item.href) ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-slate-50"}`}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-slate-100 px-5 py-6">
            <Link href="/contact-us?type=consultation#contact-form" className="btn-primary w-full">Request Consultation</Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
