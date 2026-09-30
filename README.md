# Casa Zia Rosalia & Mistral dal 1959

Sito in Next.js con database PostgreSQL. I form (soggiorno, tavolo, concierge, contatti) salvano le richieste nella tabella `inquiries`, che si crea da sola alla prima richiesta.

## Pubblicare online (consigliato: Vercel + Neon, gratis)

1. **Database**: su https://neon.tech crea un account e un progetto. Copia la "connection string" (inizia con `postgresql://`).
2. **Codice**: carica questa cartella su un repository GitHub (il file `.env` NON va caricato).
3. **Sito**: su https://vercel.com scegli *Add New → Project*, seleziona il repository.
4. Prima di premere *Deploy*, apri **Environment Variables** e aggiungi:
   - nome: `DATABASE_URL`
   - valore: la connection string di Neon
5. Premi **Deploy**. Dopo un minuto il sito è online.
6. **Dominio**: in Vercel → *Settings → Domains* aggiungi il tuo dominio e segui le istruzioni DNS.

Non serve lanciare nessun comando e nessun SQL.

## Leggere le richieste ricevute

Su Neon: *Tables → inquiries*. Ogni riga è una richiesta (nome, email, telefono, date, messaggio).

## Provarlo sul proprio computer

Servono Node.js 20+ e un Postgres (anche quello gratuito di Neon va bene).

```bash
npm install
echo 'DATABASE_URL=postgresql://...' > .env
npm run dev      # http://localhost:3000
```

## Cosa modificare

- Testi, servizi, menu, link: `src/lib/data.ts`
- Foto: sostituisci gli indirizzi nel blocco `IMG` di `src/lib/data.ts` con i link alle tue foto (o metti i file in `public/` e usa `/nome-file.jpg`)
- Colori: `src/app/globals.css` (blocco `@theme`)
