// Saves contact messages and consultation requests to MongoDB (database: bdcallingenterprise).
import { NextResponse } from "next/server";
import { getDb, COLLECTIONS } from "@/lib/mongodb";
import { services } from "@/data/services";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = { name: 100, company: 150, phone: 30, email: 150, subject: 200, service: 150, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const serviceTitles = new Set(services.map((s) => s.title));

// Best-effort per-IP rate limit (per server instance): 5 submissions / 10 minutes.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "website" field. Pretend success for bots.
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please try again in a few minutes." }, { status: 429 });
  }

  const type = body.type === "consultation" ? "consultation" : "contact";
  const data = {
    name: str(body.name, LIMITS.name),
    company: str(body.company, LIMITS.company),
    phone: str(body.phone, LIMITS.phone),
    email: str(body.email, LIMITS.email).toLowerCase(),
    subject: str(body.subject, LIMITS.subject),
    service: str(body.service, LIMITS.service),
    message: str(body.message, LIMITS.message),
  };

  const errors: Record<string, string> = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.message) errors.message = "Please enter a message.";
  if (type === "contact" && !data.subject) errors.subject = "Please enter a subject.";
  if (type === "consultation" && !serviceTitles.has(data.service)) errors.service = "Please choose a service.";
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, error: "Please check the highlighted fields.", errors }, { status: 400 });
  }

  const doc = {
    ...data,
    ...(type === "consultation" ? { subject: data.subject || `Consultation: ${data.service}` } : { service: undefined }),
    status: "new" as const,
    createdAt: new Date(),
    meta: {
      ip,
      userAgent: str(req.headers.get("user-agent"), 300),
      referer: str(req.headers.get("referer"), 300),
    },
  };

  try {
    const db = await getDb();
    await db.collection(type === "consultation" ? COLLECTIONS.consultation : COLLECTIONS.contact).insertOne(doc, { ignoreUndefined: true });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact] save failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false, error: "We couldn't send your message right now. Please call or email us instead." }, { status: 500 });
  }
}
