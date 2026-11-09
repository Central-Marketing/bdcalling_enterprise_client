import Link from "next/link";
import Image from "next/image";

// Official logo (trimmed, transparent). logo-white.png is the same artwork in white for dark backgrounds.
const W = 2258;
const H = 536;

export default function Logo({ light = false, className = "h-10" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Bdcalling Enterprise home" className="flex shrink-0 items-center">
      <Image
        src={light ? "/images/logo-white.png" : "/images/logo.png"}
        alt="Bdcalling Enterprise"
        width={W}
        height={H}
        priority={!light}
        sizes="200px"
        className={`${className} w-auto`}
      />
    </Link>
  );
}
