"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const field =
  "w-full rounded-lg border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot: only bots fill this

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-center justify-center rounded-3xl border bg-card p-10 text-center">
        <CheckCircle2 strokeWidth={1.5} className="size-12 text-primary" />
        <h3 className="mt-6 text-2xl font-semibold tracking-tight">Message sent</h3>
        <p className="mt-2 text-muted-foreground">Thanks! I&apos;ll reply within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-3xl border bg-card p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium">
          Name
          <input name="name" required autoComplete="name" placeholder="Jane Smith" className={field} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" placeholder="jane@agency.com" className={field} />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium">
        <span>
          Agency <span className="font-normal text-muted-foreground">(optional)</span>
        </span>
        <input name="agency" autoComplete="organization" placeholder="Agency name" className={field} />
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium">
        Project details
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Figma link, number of pages, deadline..."
          className={field}
        />
      </label>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          Something went wrong. Please email me directly.
        </p>
      )}
    </form>
  );
}