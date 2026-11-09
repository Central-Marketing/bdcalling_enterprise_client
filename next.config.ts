import type { NextConfig } from "next";

// Old WordPress URLs -> new URLs (keeps Google rankings and old links working)
const legacy: [string, string][] = [
  ["/oem-spare-parts-indenting-2", "/services/government-tender-rfq-strategy"],
  ["/oem-spare-parts-indenting", "/services/oem-spare-parts-indenting"],
  ["/turnkey-supply-installation", "/services/turnkey-supply-installation"],
  ["/compliance-documentation", "/services/compliance-documentation"],
  ["/ministry-of-food", "/industries-we-serve/ministry-of-food"],
  ["/power-energy-sector", "/industries-we-serve/power-energy-sector"],
  ["/rural-power-company-ltd-rpcl", "/industries-we-serve/rural-power-company-ltd-rpcl"],
  ["/security-printing-organizations", "/industries-we-serve/security-printing-organizations"],
  ["/bangladesh-biman-civil-aviation-authority-of-bangladesh-caab", "/industries-we-serve/bangladesh-biman-caab"],
  ["/home", "/"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
