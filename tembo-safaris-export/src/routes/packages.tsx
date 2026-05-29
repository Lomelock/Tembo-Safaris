import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { packages, img } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Safari Packages — Tanzania Tours from $980" },
      { name: "description", content: "Luxury, mid-range, camping, honeymoon and family safari packages. Browse curated Tanzania tours." },
      { property: "og:title", content: "Tanzania Safari Packages" },
      { property: "og:description", content: "Curated Tanzania safaris for every budget and style." },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: Packages,
});

const categories = ["All", "Luxury Safaris", "Mid-range Safaris", "Budget Camping Safaris", "Honeymoon Tours", "Family Tours", "Cultural Tours", "Beach Holidays", "Mountain Trekking"];

function Packages() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        image={img.balloon}
        eyebrow="Tour Packages"
        title="A safari for every soul and season."
        subtitle="Hand-crafted itineraries — fully customizable to your style, dates and budget."
      />

      <section className="py-16 container-x">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                active === c
                  ? "bg-[var(--sunset)] text-white border-[var(--sunset)]"
                  : "bg-card text-foreground border-border hover:border-[var(--sunset)] hover:text-[var(--sunset)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <article key={p.slug} className="group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--sunset)] text-white text-xs font-medium flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {p.duration}
                </span>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 text-xs font-medium">{p.category}</span>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{p.description}</p>
                <div className="mt-6 pt-6 border-t border-border flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">From per person</div>
                    <div className="font-display text-3xl text-[var(--sunset)]">${p.price.toLocaleString()}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button asChild size="sm" variant="outline" className="rounded-full">
                      <Link to="/packages">View Details</Link>
                    </Button>
                    <Button asChild size="sm" className="bg-foreground text-background hover:bg-[var(--forest)] rounded-full">
                      <Link to="/contact">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-4xl">Can't find your perfect trip?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Every itinerary is fully customizable. Tell us what you're dreaming of and we'll design it.</p>
          <Button asChild size="lg" className="mt-8 bg-[var(--sunset)] hover:bg-[var(--sunset)]/90 text-white rounded-full px-8 h-12">
            <Link to="/contact">Request a Custom Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
