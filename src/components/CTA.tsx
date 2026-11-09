import Link from "next/link";
import { site } from "@/data/site";
import { ArrowRight, Phone } from "./Icons";

export default function CTA() {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl bg-brand-700 px-6 py-14 text-center sm:px-12 md:py-20">
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to win your next tender?</h2>
          <p className="mt-4 text-lg text-brand-100">Talk to our procurement team about tenders, RFQs, OEM spares or turnkey supply. We&apos;ll respond within one business day.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact-us?type=consultation#contact-form" className="btn-light">Request Consultation <ArrowRight className="h-4 w-4" /></Link>
            <a href={`tel:${site.phoneIntl}`} className="btn-ghost"><Phone className="h-4 w-4" /> {site.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
