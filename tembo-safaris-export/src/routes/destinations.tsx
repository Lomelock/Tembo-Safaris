import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { destinations, img } from "@/lib/site-data";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Tanzania Destinations — Serengeti, Kilimanjaro & Zanzibar" },
      { name: "description", content: "Explore Tanzania's iconic destinations: Serengeti, Ngorongoro, Kilimanjaro, Zanzibar, Tarangire, and more." },
      { property: "og:title", content: "Tanzania Destinations" },
      { property: "og:description", content: "From the Serengeti plains to Zanzibar shores — explore the wonders of Tanzania." },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: Destinations,
});

function Destinations() {
  return (
    <>
      <PageHero
        image={img.ngorongoro}
        eyebrow="Where We Go"
        title="Ten landscapes. One unforgettable country."
        subtitle="From the snow-capped roof of Africa to the spice islands of the Indian Ocean."
      />

      <section className="py-24 container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((d) => (
            <article key={d.slug} className="group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-[var(--sunset)]" /> {d.region}
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-display text-2xl">{d.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{d.description}</p>
                <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 text-[var(--sunset)]" />
                  Best time · {d.bestTime}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {d.activities.map((a) => (
                    <span key={a} className="text-[11px] px-2.5 py-1 bg-secondary rounded-full">{a}</span>
                  ))}
                </div>
                <Link to="/contact" className="mt-6 inline-flex items-center text-sm font-medium text-[var(--sunset)] gold-underline">
                  Plan a trip here <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--sunset)] mb-3">Tanzania Map</p>
            <h2 className="font-display text-4xl md:text-5xl text-balance">An entire continent's wonders in one country.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The Northern Circuit holds the icons: Serengeti, Ngorongoro, Tarangire, Manyara and Kilimanjaro — all reachable from Arusha. The Southern Circuit (Ruaha, Nyerere) is wilder, quieter, and perfect for repeat travelers. Zanzibar and the spice islands sit just a short flight from the bush.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✦ Northern Circuit — classic safari icons</li>
              <li>✦ Southern Circuit — remote and untouched</li>
              <li>✦ Coast — Zanzibar, Mafia & Pemba</li>
              <li>✦ Rift Valley — flamingos, lakes & active volcanoes</li>
            </ul>
          </div>
          <div className="aspect-square bg-card rounded-2xl border border-border p-6 flex items-center justify-center text-center text-muted-foreground">
            <iframe
              title="Tanzania map"
              src="https://maps.google.com/maps?q=Tanzania&t=&z=6&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full rounded-xl border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
