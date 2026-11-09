"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { ArrowRight, Check } from "./Icons";

type FormType = "consultation" | "contact";
type Status = "idle" | "sending" | "sent" | "error";

const input =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:outline-none focus:ring-4 transition";
const ok = "border-slate-300 focus:border-brand-500 focus:ring-brand-500/15";
const bad = "border-red-400 focus:border-red-500 focus:ring-red-500/15";

/** Contact + consultation form. Submissions are saved to MongoDB via /api/contact. */
export default function ContactForm() {
  const [type, setType] = useState<FormType>("contact");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  // "Request Consultation" buttons link to /contact-us?type=consultation (works even when already on this page)
  const typeParam = useSearchParams().get("type");
  useEffect(() => {
    if (typeParam === "consultation") { setType("consultation"); setStatus("idle"); }
  }, [typeParam]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    setFieldErrors({});
    const payload = { ...Object.fromEntries(new FormData(e.currentTarget)), type };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setFieldErrors(json.errors ?? {});
        setError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      formRef.current?.reset();
      setStatus("sent");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-brand-50 px-6 py-12 text-center" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white"><Check className="h-7 w-7" /></span>
        <h3 className="mt-5 text-2xl font-bold">{type === "consultation" ? "Consultation request received" : "Message sent"}</h3>
        <p className="mt-2 max-w-md">Thank you. Our team will get back to you within one business day. For anything urgent, call <a className="font-semibold text-brand-700" href={`tel:${site.phoneIntl}`}>{site.phone}</a>.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-primary mt-6">Send another message</button>
      </div>
    );
  }

  const cls = (name: string) => `${input} ${fieldErrors[name] ? bad : ok}`;
  const err = (name: string) => fieldErrors[name] && <span className="mt-1.5 block text-xs font-medium text-red-600">{fieldErrors[name]}</span>;
  const req = <span className="text-brand-600"> *</span>;

  return (
    <form ref={formRef} onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      {/* Type switch */}
      <div className="sm:col-span-2">
        <div role="radiogroup" aria-label="What can we help with?" className="grid grid-cols-2 gap-1 rounded-2xl bg-slate-100 p-1">
          {([["consultation", "Request a consultation"], ["contact", "General message"]] as const).map(([v, label]) => (
            <button
              key={v}
              type="button"
              role="radio"
              aria-checked={type === v}
              onClick={() => { setType(v); setFieldErrors({}); setError(""); }}
              className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${type === v ? "bg-white text-brand-700 shadow-sm" : "text-slate-600 hover:text-ink"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <label className="text-sm font-medium text-ink">Full name{req}
        <input name="name" type="text" required maxLength={100} autoComplete="name" className={cls("name")} />{err("name")}
      </label>
      <label className="text-sm font-medium text-ink">Company
        <input name="company" type="text" maxLength={150} autoComplete="organization" className={cls("company")} />
      </label>
      <label className="text-sm font-medium text-ink">Phone
        <input name="phone" type="tel" maxLength={30} autoComplete="tel" className={cls("phone")} />
      </label>
      <label className="text-sm font-medium text-ink">Email{req}
        <input name="email" type="email" required maxLength={150} autoComplete="email" className={cls("email")} />{err("email")}
      </label>

      {type === "consultation" ? (
        <label className="text-sm font-medium text-ink sm:col-span-2">Service you need{req}
          <select name="service" required defaultValue="" className={cls("service")}>
            <option value="" disabled>Choose a service</option>
            {services.map((s) => (<option key={s.slug} value={s.title}>{s.title}</option>))}
          </select>{err("service")}
        </label>
      ) : (
        <label className="text-sm font-medium text-ink sm:col-span-2">Subject{req}
          <input name="subject" type="text" required maxLength={200} className={cls("subject")} />{err("subject")}
        </label>
      )}

      <label className="text-sm font-medium text-ink sm:col-span-2">
        {type === "consultation" ? "Project details" : "Message"}{req}
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder={type === "consultation" ? "Tell us about the tender, equipment or supply you need help with." : undefined}
          className={cls("message")}
        />{err("message")}
      </label>

      {/* Honeypot (hidden from people, bots fill it in) */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:cursor-not-allowed disabled:opacity-70">
          {status === "sending" ? "Sending…" : type === "consultation" ? "Request consultation" : "Send message"}
          {status !== "sending" && <ArrowRight className="h-4 w-4" />}
        </button>
        {status === "error" && <p role="alert" className="text-sm font-medium text-red-600">{error}</p>}
      </div>
    </form>
  );
}
