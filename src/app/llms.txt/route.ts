// /llms.txt: a plain-text summary of the site for AI assistants and answer engines (GEO).
// Built from the same data as the pages, so it never goes out of date.
import { site, about } from "@/data/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { faqs } from "@/data/faqs";
import { absUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    about.intro,
    "",
    "## Services",
    ...services.map((s) => `- [${s.title}](${absUrl(`/services/${s.slug}`)}): ${s.short}`),
    "",
    "## Industries we serve",
    ...industries.map((i) => `- [${i.title}](${absUrl(`/industries-we-serve/${i.slug}`)}): ${i.short}`),
    "",
    "## Company",
    `- [About us](${absUrl("/about-us")})`,
    `- [Leadership & oversight](${absUrl("/leadership-oversight")})`,
    `- [Contact](${absUrl("/contact-us")})`,
    "",
    "## Contact",
    `- Address: ${site.address}`,
    `- Phone: ${site.phoneIntl}`,
    `- Email: ${site.email}`,
    `- Hours: ${site.hours.map((h) => `${h.days}: ${h.time}`).join("; ")}`,
    "",
    "## FAQ",
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, ""]),
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
