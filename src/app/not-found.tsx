import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-extrabold text-brand-700">404</p>
      <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
      <p className="mt-3">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn-primary mt-8">Back to home</Link>
    </section>
  );
}
