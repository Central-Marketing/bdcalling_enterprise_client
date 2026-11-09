// Downloads the original images from the WordPress site into /public/images.
// Runs automatically before `npm run dev` / `npm run build`; skips files that already exist.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE = "https://bdcallingenterprise.com/wp-content/uploads/";
const OUT = join(process.cwd(), "public", "images");

const assets = {
  "hero-buildings.jpg": "2025/07/directly-shot-buildings-against-cloudy-sky-scaled.jpg",
  "about-team.jpg": "2025/07/serious-strategic.jpg",
  "about-office.jpg": "2025/07/0cb578d5b8ad7faa44e0e90e5b6d2df5351481b0-1.jpg",
  "why-handshake.jpg": "2025/07/0847c85882eaff4c6c76202035a98025a665aebe-e1753098277989.jpg",
  "service-tender.jpg": "2025/07/633.jpg",
  "service-oem.jpg": "2025/07/2149030439.jpg",
  "service-turnkey.jpg": "2025/07/judge-documents-office-desk-legislation-1-scaled.jpg",
  "service-compliance.jpg": "2025/07/2148194704.jpg",
  "industry-ministry-of-food.jpg": "2025/07/8a10c794-adb4-4a28-aff9-ab0414eec04c-e1753268254411.jpg",
  "industry-power-energy.jpg": "2025/07/647e6e6d4a2837503cba32512026ecb13a86b8e7.jpg",
  "industry-rpcl.png": "2025/07/logo.png",
  "industry-security-printing.png": "2025/07/The_Security_Printing_Corporation_Bangladesh_Ltd._Logo.svg_.png",
  "industry-caab.png": "2025/07/" + encodeURIComponent("বাংলাদেশ_বেসামরিক_বিমান_চলাচল_কর্তৃপক্ষের_লোগো.svg_.png"),
  "leader-zishan.png": "2026/08/Zishan-e1785744194551.png",
  "logo-original.png": "2025/07/logo-transparent-bg-scaled-e1753012028542.png",
};

mkdirSync(OUT, { recursive: true });
let fetched = 0;
for (const [name, path] of Object.entries(assets)) {
  const dest = join(OUT, name);
  if (existsSync(dest)) continue;
  try {
    const res = await fetch(BASE + path, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error("HTTP " + res.status);
    writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    fetched++;
    console.log("  ✓ " + name);
  } catch (e) {
    console.warn(`  ✗ ${name} (${e.message}) – the site will show a placeholder until this image exists`);
  }
}
if (fetched) console.log(`fetch-assets: downloaded ${fetched} image(s) into public/images`);
