"use client";

import Link from "next/link";
import { useState } from "react";
import { AIRBNB_URL } from "@/lib/data";
import Rose from "./Rose";

const links = [
  { href: "/la-casa", label: "La Casa" },
  { href: "/mistral", label: "Mistral dal 1959" },
  { href: "/esperienze", label: "Esperienze" },
  { href: "/contatti", label: "Contatti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-deep text-cream shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Rose />
          <span className="leading-none">
            <span className="font-display block text-2xl">Zia Rosalia</span>
            <span className="block pt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-sun">
              Vergine Maria · Palermo
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-xs font-bold uppercase tracking-[0.18em] hover:text-sun">
              {l.label}
            </Link>
          ))}
          <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-sun !py-2.5">
            Prenota
          </a>
        </nav>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-cream/40 md:hidden"
        >
          <span className={`h-0.5 w-5 bg-cream transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-cream transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-cream transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div className="tile-strip majolica" />

      {open && (
        <nav className="flex flex-col gap-1 bg-deep px-5 pb-6 pt-3 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display py-2 text-3xl">
              {l.label}
            </Link>
          ))}
          <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-sun mt-3">
            Prenota su Airbnb
          </a>
        </nav>
      )}
    </header>
  );
}
