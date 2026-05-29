import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Users, Award, MapPin, Calendar, Compass, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { img, destinations, packages, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tembo Safaris — Explore Tanzania Beyond Imagination" },
      { name: "description", content: "Tailor-made Tanzanian safaris, Kilimanjaro climbs and Zanzibar holidays. Book with local experts trusted by thousands of travelers." },
      { property: "og:title", content: "Tembo Safaris — Explore Tanzania Beyond Imagination" },
      { property: "og:description", content: "Tailor-made Tanzanian safaris, Kilimanjaro climbs and Zanzibar holidays." },
      { property: "og:image", content: "/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const heroSlides = [
  { image: img.serengeti, headline: "Explore Tanzania Beyond Imagination", sub: "Where golden plains meet snow-capped peaks and turquoise shores." },
  { image: img.migration, headline: "Witness the Greatest Show on Earth", sub: "1.5 million wildebeest. 18 unforgettable river crossings. One lifetime." },
  { image: img.kilimanjaro, headline: "Stand on the Roof of Africa", sub: "Summit Kilimanjaro with Tanzania's most trusted local guides." },
];

function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = Date.now();
        const dur = 1800;
        const tick = () => {
          const p = Math.min((Date.now() - start) / dur, 1);
          setV(Math.floor(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        tick();
        ob.disconnect();
      }
    });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [end]);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl text-[var(--gold)] font-semibold">{v}{suffix}</div>
      <div className="mt-2 text-sm tracking-wider uppercase text-white/70">{label}</div>
    </div>
  );
}

function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO SLIDER */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[2000ms]"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img src={s.image} alt={s.headline} className="absolute inset-0 h-full w-full object-cover animate-slow-zoom" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
        ))}

        <div className="relative h-full container-x flex flex-col justify-center text-white pt-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-6 animate-fade-in">
            Tanzania · Since 2009
          </p>
          <h1 key={slide} className="font-display text-5xl md:text-7xl lg:text-8xl max-w-5xl text-balance leading-[1.05] animate-fade-up">
            {heroSlides[slide].headline}
          </h1>
          <p key={`s-${slide}`} className="mt-6 max-w-2xl text-lg md:text-xl text-white/85 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {heroSlides[slide].sub}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <Button asChild size="lg" className="bg-[var(--sunset)] hover:bg-[var(--sunset)]/90 text-white rounded-full px-8 h-14 text-base">
              <Link to="/contact">Book Your Safari <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-white/10 border-white/40 text-white hover:bg-white hover:text-foreground backdrop-blur-sm">
              <Link to="/packages">View Packages</Link>
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-1 rounded-full transition-all ${i === slide ? "w-10 bg-[var(--gold)]" : "w-6 bg-white/40"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* QUICK SEARCH */}
      <section className="container-x -mt-12 relative z-10 hidden md:block">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] p-6 grid grid-cols-4 gap-4 border border-border">
          {[
            { icon: MapPin, label: "Destination", value: "Anywhere in Tanzania" },
            { icon: Calendar, label: "When", value: "Choose dates" },
            { icon: Users, label: "Travelers", value: "2 adults" },
            { icon: Compass, label: "Style", value: "Any safari" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 px-3 py-2 border-r border-border last:border-r-0">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                <Icon className="h-4 w-4 text-[var(--sunset)]" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="text-sm font-medium">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--sunset)] mb-3">Iconic Places</p>
              <h2 className="font-display text-4xl md:text-5xl max-w-2xl text-balance">Destinations woven from legend</h2>
            </div>
            <Link to="/destinations" className="text-sm font-medium gold-underline self-start md:self-end">
              View all destinations →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.slice(0, 6).map((d, i) => (
              <Link
                key={d.slug}
                to="/destinations"
                className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2 h-[520px]" : "h-[250px]"}`}
              >
                <img src={d.image} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] mb-2">{d.region}</p>
                  <h3 className="font-display text-2xl md:text-3xl">{d.name}</h3>
                  <p className="mt-1 text-sm text-white/75 line-clamp-2 max-w-md">{d.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-28 bg-secondary/50">
        <div className="container-x">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--sunset)] mb-3">Curated Journeys</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl mx-auto text-balance">Popular safari packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.slice(0, 6).map((p) => (
              <article key={p.slug} className="group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500 flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--sunset)] text-white text-xs font-medium">{p.duration}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.category}</p>
                  <h3 className="font-display text-xl mt-2">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{p.description}</p>
                  <div className="mt-5 flex items-end justify-between pt-5 border-t border-border">
                    <div>
                      <div className="text-xs text-muted-foreground">from</div>
                      <div className="font-display text-2xl text-[var(--sunset)]">${p.price.toLocaleString()}</div>
                    </div>
                    <Button asChild size="sm" className="bg-foreground text-background hover:bg-[var(--forest)] rounded-full">
                      <Link to="/packages">Details</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-28">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={img.luxuryLodge} alt="Luxury safari camp" loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] w-full h-[560px] object-cover" />
            <div className="absolute -bottom-8 -right-4 md:-right-12 bg-[var(--sunset)] text-white p-8 rounded-2xl max-w-xs shadow-[var(--shadow-elegant)]">
              <div className="font-display text-5xl">15+</div>
              <div className="text-sm mt-1 text-white/85">Years guiding travelers through Tanzania</div>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--sunset)] mb-3">Why Tembo</p>
            <h2 className="font-display text-4xl md:text-5xl text-balance">A locally-rooted team, world-class hospitality</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We are born-and-raised Tanzanians who built this company to share the country we love. Every itinerary is hand-crafted, every guide certified, every camp personally vetted.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                { icon: Award, t: "Licensed & insured", d: "Full TTB & TATO accreditation" },
                { icon: Users, t: "Expert local guides", d: "Average 12+ years in the bush" },
                { icon: Heart, t: "Ethical tourism", d: "Community & conservation first" },
                { icon: Star, t: "5-star reviewed", d: "Loved on TripAdvisor & SafariBookings" },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-[var(--sunset)]" />
                  </div>
                  <div>
                    <div className="font-display text-lg">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-28 overflow-hidden">
        <img src={img.balloon} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[oklch(0.15_0.04_40)]/82" />
        <div className="container-x relative grid grid-cols-2 md:grid-cols-4 gap-10">
          <Counter end={12000} suffix="+" label="Happy travelers" />
          <Counter end={350} suffix="+" label="Safaris run yearly" />
          <Counter end={15} label="Years of experience" />
          <Counter end={98} suffix="%" label="Would book again" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 bg-secondary/40">
        <div className="container-x">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--sunset)] mb-3">Travelers' Stories</p>
            <h2 className="font-display text-4xl md:text-5xl text-balance">Loved by adventurers worldwide</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <blockquote className="font-display text-xl leading-relaxed text-foreground/90 flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.country}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20">
        <div className="container-x text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--sunset)] mb-3">@tembosafaris</p>
          <h2 className="font-display text-3xl md:text-4xl">Postcards from the bush</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-1">
          {[img.lion, img.zanzibar, img.maasai, img.elephants, img.flamingos, img.balloon].map((src, i) => (
            <a key={i} href="#" className="group relative aspect-square overflow-hidden">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[var(--sunset)]/0 group-hover:bg-[var(--sunset)]/40 transition-colors" />
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <img src={img.serengeti} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[oklch(0.12_0.04_40)]/75" />
        <div className="relative container-x text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl mx-auto text-balance">Your Tanzania story begins with a single email.</h2>
          <p className="mt-6 max-w-xl mx-auto text-white/80">Tell us your dreams and dates. We'll design an itinerary that fits you perfectly — no templates, no pressure.</p>
          <Button asChild size="lg" className="mt-10 bg-[var(--sunset)] hover:bg-[var(--sunset)]/90 text-white rounded-full px-10 h-14 text-base">
            <Link to="/contact">Start Planning <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
