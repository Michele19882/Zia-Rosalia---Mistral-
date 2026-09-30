"use client";

import { useState } from "react";

type Kind = "stay" | "table" | "concierge" | "info";

const kindLabels: Record<Kind, string> = {
  stay: "Soggiorno a Casa Zia Rosalia",
  table: "Tavolo da Mistral",
  concierge: "Concierge / Esperienze",
  info: "Altro / Informazioni",
};

export default function InquiryForm({
  defaultKind = "info",
  lockKind = false,
  title,
}: {
  defaultKind?: Kind;
  lockKind?: boolean;
  title?: string;
}) {
  const [kind, setKind] = useState<Kind>(defaultKind);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const dateLabel = kind === "table" ? "Data" : "Check-in";
  const showOut = kind === "stay" || kind === "concierge";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(fd.entries()), kind }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Errore");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Errore");
    }
  }

  if (status === "ok") {
    return (
      <div className="card-pop rounded-3xl bg-white p-8 text-center">
        <p className="text-5xl">🎉</p>
        <h3 className="font-display mt-3 text-3xl font-bold">Grazie, ci siamo!</h3>
        <p className="mt-2 text-ink/70">Abbiamo ricevuto la tua richiesta e ti risponderemo il prima possibile.</p>
        <button className="btn btn-sun mt-6" onClick={() => setStatus("idle")}>
          Nuova richiesta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-pop space-y-4 rounded-3xl bg-white p-6 md:p-8">
      {title && <h3 className="font-display text-3xl font-bold">{title}</h3>}

      {!lockKind && (
        <label className="block">
          <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide">Di cosa hai bisogno?</span>
          <select className="field" value={kind} onChange={(e) => setKind(e.target.value as Kind)}>
            {(Object.keys(kindLabels) as Kind[]).map((k) => (
              <option key={k} value={k}>{kindLabels[k]}</option>
            ))}
          </select>
        </label>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide">Nome *</span>
          <input name="name" required className="field" autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide">Email *</span>
          <input name="email" type="email" required className="field" autoComplete="email" />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide">Telefono</span>
          <input name="phone" type="tel" className="field" autoComplete="tel" />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide">Persone</span>
          <input name="guests" type="number" min={1} max={99} className="field" />
        </label>
        {kind !== "info" && (
          <label className="block">
            <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide">{dateLabel}</span>
            <input name="checkIn" type="date" className="field" />
          </label>
        )}
        {kind !== "info" && showOut && (
          <label className="block">
            <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide">Check-out</span>
            <input name="checkOut" type="date" className="field" />
          </label>
        )}
      </div>

      <label className="block">
        <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide">Messaggio</span>
        <textarea name="message" rows={4} className="field" placeholder="Raccontaci cosa hai in mente…" />
      </label>

      {status === "error" && <p className="rounded-xl bg-terra/10 p-3 text-sm font-bold text-terra">{error}</p>}

      <button type="submit" disabled={status === "sending"} className="btn btn-terra w-full disabled:opacity-60">
        {status === "sending" ? "Invio in corso…" : "Invia richiesta"}
      </button>
      <p className="text-center text-xs text-ink/50">Nessun impegno: ti rispondiamo noi, di persona.</p>
    </form>
  );
}
