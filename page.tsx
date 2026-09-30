import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import { AIRBNB_URL, CIN, FACEBOOK_URL, MISTRAL_ADDRESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contatti · Casa Zia Rosalia & Mistral",
  description: "Scrivici per soggiorni, tavoli da Mistral, concierge e informazioni.",
};

export default function Contatti() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="kicker text-terra">Contatti</p>
          <h1 className="font-display mt-2 text-5xl font-bold md:text-7xl">Parliamone!</h1>
          <p className="mt-5 text-lg text-ink/80">
            Che sia per un weekend, un&apos;estate intera o una pizza di compleanno: scrivici e ti rispondiamo il prima
            possibile.
          </p>

          <div className="mt-10 space-y-5">
            <div className="card-pop rounded-3xl bg-sun p-6">
              <h2 className="font-display text-2xl font-bold">Casa Zia Rosalia</h2>
              <p className="mt-1">Vergine Maria, Palermo</p>
              <p className="text-sm text-ink/70">CIN {CIN}</p>
              <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold underline">
                Vedi su Airbnb ↗
              </a>
            </div>
            <div className="card-pop rounded-3xl bg-terra p-6 text-white">
              <h2 className="font-display text-2xl font-bold">Mistral dal 1959</h2>
              <p className="mt-1">{MISTRAL_ADDRESS}</p>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold underline">
                Pagina Facebook ↗
              </a>
            </div>
          </div>
        </div>
        <InquiryForm defaultKind="info" title="Scrivici" />
      </div>
    </section>
  );
}
