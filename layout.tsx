import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Zia Rosalia & Mistral dal 1959 · Vergine Maria, Palermo",
  description:
    "Casa vacanze a due passi dal mare a Vergine Maria (Palermo) e pizzeria storica Mistral dal 1959. Concierge, transfer, tour ed esperienze in mare.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
