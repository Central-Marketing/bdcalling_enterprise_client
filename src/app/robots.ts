import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// AI search / answer-engine crawlers are allowed explicitly so the site can be cited in
// ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews (GEO / AEO).
const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Bingbot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: aiBots, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
