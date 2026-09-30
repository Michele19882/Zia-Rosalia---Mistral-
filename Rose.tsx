/** Rosa stilizzata: richiamo a Santa Rosalia, coronata di rose. */
export default function Rose({ className = "h-9 w-9" }: { className?: string }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      {petals.map((a) => (
        <ellipse
          key={a}
          cx="32"
          cy="15"
          rx="10"
          ry="13"
          fill="#c8556b"
          stroke="#7d1f36"
          strokeWidth="1.5"
          transform={`rotate(${a} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="12" fill="#e07a8e" stroke="#7d1f36" strokeWidth="1.5" />
      <path
        d="M32 24c5 0 8 3 8 7s-3 7-8 7-6-3-6-5 2-4 4-4 3 1 3 2"
        fill="none"
        stroke="#7d1f36"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="2" fill="#f2b632" />
    </svg>
  );
}
