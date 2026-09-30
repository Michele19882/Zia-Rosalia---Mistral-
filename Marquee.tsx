export default function Marquee({ items, className = "bg-terra text-cream" }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden py-3 ${className}`} aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={i} className="font-display flex items-center whitespace-nowrap text-xl italic">
                <span className="px-6">{t}</span>
                <span className="text-sun">✿</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
