import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Plus Jakarta Sans (the site's heading font). The OG renderer needs .woff/.ttf, not .woff2.
const fontDir = join(process.cwd(), "node_modules/@fontsource/plus-jakarta-sans/files");
const loadFont = (w: 500 | 700 | 800) => readFile(join(fontDir, `plus-jakarta-sans-latin-${w}-normal.woff`));
// Official logo, white version, embedded as a data URL
const loadLogo = () => readFile(join(process.cwd(), "public/images/logo-white.png")).then((b) => `data:image/png;base64,${b.toString("base64")}`);

/** Branded 1200x630 social-share card used for Open Graph and Twitter. */
export async function renderOg({ eyebrow, title }: { eyebrow: string; title: string }) {
  const host = new URL(site.url).host;
  const [f500, f700, f800, logo] = await Promise.all([loadFont(500), loadFont(700), loadFont(800), loadLogo()]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #051b33 0%, #082c52 60%, #0b4a8b 100%)",
          color: "#ffffff",
          fontFamily: "Jakarta",
          fontWeight: 500,
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={logo} width={337} height={80} />
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#38c6d9" }}>{eyebrow}</span>
          <span style={{ marginTop: 18, fontSize: title.length > 48 ? 58 : 68, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5 }}>{title}</span>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px solid rgba(56,198,217,0.45)", paddingTop: 28, fontSize: 24, color: "#d7e7f7" }}>
          <span>{site.tagline}</span>
          <span style={{ fontWeight: 700, color: "#ffffff" }}>{host}</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Jakarta", data: f500, weight: 500, style: "normal" },
        { name: "Jakarta", data: f700, weight: 700, style: "normal" },
        { name: "Jakarta", data: f800, weight: 800, style: "normal" },
      ],
    },
  );
}
