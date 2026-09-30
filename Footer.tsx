import Link from "next/link";
import { AIRBNB_URL, CIN, FACEBOOK_URL, MISTRAL_ADDRESS } from "@/lib/data";
import Rose from "./Rose";

export default function Footer() {
  return (
    <footer className="bg-deep text-cream">
      <div className="tile-strip majolica" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Rose className="h-12 w-12" />
            <p className="font-display text-4xl text-sun">Zia Rosalia</p>
          </div>
          <p className="mt-4 max-w-md text-cream/80">
            Una casa vacanze e una pizzeria storica nello stesso borgo di mare. Famiglia, ospitalità e Palermo vera,
            ai piedi di Monte Pellegrino.
          </p>
        </div>
        <div>
          <p className="kicker mb-3 text-sun">Esplora</p>
          <ul className="space-y-2">
            <li><Link href="/la-casa" className="hover:text-sun">La Casa</Link></li>
            <li><Link href="/mistral" className="hover:text-sun">Mistral dal 1959</Link></li>
            <li><Link href="/esperienze" className="hover:text-sun">Esperienze & Concierge</Link></li>
            <li><Link href="/contatti" className="hover:text-sun">Contatti</Link></li>
          </ul>
        </div>
        <div>
          <p className="kicker mb-3 text-sun">Seguici</p>
          <ul className="space-y-2">
            <li><a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-sun">Airbnb ↗</a></li>
            <li><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-sun">Facebook Mistral ↗</a></li>
          </ul>
          <p className="mt-5 text-sm text-cream/70">Mistral: {MISTRAL_ADDRESS}</p>
        </div>
      </div>
      <div className="border-t border-cream/20 px-5 py-5 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Casa Zia Rosalia & Mistral dal 1959 · CIN {CIN}
      </div>
    </footer>
  );
}
