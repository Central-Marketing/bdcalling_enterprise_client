import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { Facebook, Instagram, Linkedin, Mail, Phone, Pin } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-200">
            Government procurement, OEM spare parts indenting, RFQ management and turnkey supply solutions for Bangladesh&apos;s power, energy and infrastructure sectors.
          </p>
          <div className="mt-6 flex gap-3">
            {[{ h: site.social.facebook, I: Facebook, l: "Facebook" }, { h: site.social.linkedin, I: Linkedin, l: "LinkedIn" }, { h: site.social.instagram, I: Instagram, l: "Instagram" }].map(({ h, I, l }) => (
              <a key={l} href={h} target="_blank" rel="noopener" aria-label={l} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-brand-600 hover:text-white"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[["About Us", "/about-us"], ["Leadership", "/leadership-oversight"], ["Industries", "/industries-we-serve"], ["Contact", "/contact-us"]].map(([l, h]) => (
              <li key={h}><Link href={h} className="hover:text-white">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (<li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link></li>))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><Pin className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" /><span>{site.address}</span></li>
            <li><a href={`tel:${site.phoneIntl}`} className="flex gap-3 hover:text-white"><Phone className="h-5 w-5 shrink-0 text-accent-400" />{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white"><Mail className="h-5 w-5 shrink-0 text-accent-400" />{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-300 sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
