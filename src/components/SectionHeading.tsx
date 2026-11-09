export default function SectionHeading({ eyebrow, title, text, center = false, light = false }: { eyebrow: string; title: string; text?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "text-accent-400" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold md:text-4xl ${light ? "text-white" : ""}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-brand-100" : ""}`}>{text}</p>}
    </div>
  );
}
