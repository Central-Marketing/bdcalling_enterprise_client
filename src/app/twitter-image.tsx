import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Bdcalling Enterprise: procurement and supply partner for Bangladesh's critical infrastructure";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Government Procurement & Supply", title: "Procurement & supply partner for Bangladesh's critical infrastructure" });
}
