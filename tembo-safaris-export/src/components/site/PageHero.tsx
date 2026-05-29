interface Props {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ image, eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover animate-slow-zoom" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative h-full container-x flex flex-col justify-end pb-16 text-white">
        {eyebrow && (
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4 animate-fade-in">{eyebrow}</p>
        )}
        <h1 className="font-display text-5xl md:text-7xl text-balance max-w-4xl animate-fade-up">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-white/85 text-lg animate-fade-up" style={{ animationDelay: "0.15s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
