// schema.org structured data builders (JSON-LD) for search and AI answer engines.
import { site } from "@/data/site";
import type { Service } from "@/data/services";
import type { Industry } from "@/data/industries";
import { absUrl } from "./seo";

const ORG_ID = absUrl("/#organization");
const SITE_ID = absUrl("/#website");

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: site.name,
    url: absUrl("/"),
    logo: { "@type": "ImageObject", url: absUrl("/images/logo.png"), width: 2258, height: 536 },
    image: absUrl("/opengraph-image"),
    description: site.description,
    email: site.email,
    telephone: site.phoneIntl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressParts.street,
      addressLocality: site.addressParts.city,
      postalCode: site.addressParts.postalCode,
      addressRegion: site.addressParts.region,
      addressCountry: site.addressParts.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.openingHours.days,
      opens: site.openingHours.opens,
      closes: site.openingHours.closes,
    },
    areaServed: { "@type": "Country", name: site.areaServed },
    knowsAbout: site.keywords.filter((k) => k !== site.name),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phoneIntl,
      email: site.email,
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: Object.values(site.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: absUrl("/"),
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

/** Breadcrumb trail for search results (not shown on the page). Home is added automatically. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absUrl(it.path) })),
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absUrl(`/services/${s.slug}#service`),
    name: s.title,
    description: s.short,
    url: absUrl(`/services/${s.slug}`),
    image: absUrl(s.image),
    serviceType: s.title,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: site.areaServed },
  };
}

export function servicesListSchema(list: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} services`,
    itemListElement: list.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: absUrl(`/services/${s.slug}`), name: s.title })),
  };
}

export function industrySchema(i: Industry) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absUrl(`/industries-we-serve/${i.slug}#webpage`),
    name: i.title,
    description: i.short,
    url: absUrl(`/industries-we-serve/${i.slug}`),
    about: { "@type": "Thing", name: i.title },
    isPartOf: { "@id": SITE_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
