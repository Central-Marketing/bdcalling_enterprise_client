"use client";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/** next/image that falls back to a brand-coloured block if the file is missing. */
export default function Img(props: ImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <span aria-hidden className={`block bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 ${props.fill ? "absolute inset-0" : ""} ${props.className ?? ""}`} />;
  }
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} onError={() => setFailed(true)} />;
}
