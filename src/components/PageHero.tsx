import Img from "./Img";

export default function PageHero({ eyebrow, title, text, image = "/images/hero-buildings.jpg" }: { eyebrow?: string; title: string; text?: string; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950">
      <Img src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-900/60" />
      <div className="container-x py-20 md:py-28">
        {eyebrow && <p className="eyebrow text-accent-400">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white md:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100">{text}</p>}
      </div>
    </section>
  );
}
