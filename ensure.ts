import { pool } from "@/db";

let ready: Promise<void> | null = null;

/** Crea la tabella delle richieste se non esiste (nessun passaggio manuale in produzione). */
export function ensureSchema(): Promise<void> {
  if (!ready) {
    ready = pool
      .query(
        `CREATE TABLE IF NOT EXISTS inquiries (
          id serial PRIMARY KEY,
          kind text NOT NULL DEFAULT 'info',
          name text NOT NULL,
          email text NOT NULL,
          phone text,
          check_in text,
          check_out text,
          guests integer,
          message text,
          created_at timestamp NOT NULL DEFAULT now()
        )`,
      )
      .then(() => undefined)
      .catch((e) => {
        ready = null;
        throw e;
      });
  }
  return ready;
}
