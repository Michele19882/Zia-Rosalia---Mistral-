"use client";

import { useState } from "react";
import { AIRBNB_URL } from "@/lib/data";

export default function BookingBar() {
  const today = new Date().toISOString().slice(0, 10);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(2);

  function go(e: React.FormEvent) {
    e.preventDefault();
    const p = new URLSearchParams();
    if (checkin) p.set("check_in", checkin);
    if (checkout) p.set("check_out", checkout);
    p.set("adults", String(adults));
    window.open(`${AIRBNB_URL}?${p.toString()}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={go}
      className="card-pop grid gap-3 rounded-3xl bg-white p-4 text-ink sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.7fr_auto] lg:items-end"
    >
      <label className="block">
        <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide">Arrivo</span>
        <input type="date" min={today} value={checkin} onChange={(e) => setCheckin(e.target.value)} className="field" />
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide">Partenza</span>
        <input
          type="date"
          min={checkin || today}
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
          className="field"
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-extrabold uppercase tracking-wide">Ospiti</span>
        <select value={adults} onChange={(e) => setAdults(Number(e.target.value))} className="field">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </label>
      <button type="submit" className="btn btn-terra sm:col-span-2 lg:col-span-1">
        Verifica su Airbnb →
      </button>
    </form>
  );
}
