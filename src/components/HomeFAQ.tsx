import { faqs } from "@/data/faqs";
import FaqAccordion from "./FaqAccordion";
import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/schema";

export default function HomeFAQ() {
  return (
    <section className="py-20 md:py-28">
      <JsonLd data={faqSchema(faqs)} />
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="self-start lg:sticky lg:top-28 lg:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold md:text-[2.75rem] md:leading-[1.1]">
            Frequently asked <span className="text-brand-700">questions</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed">Quick answers about our procurement, tender and supply services.</p>
        </div>
        <div className="lg:col-span-8">
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
