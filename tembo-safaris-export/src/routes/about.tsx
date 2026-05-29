import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { img } from "@/lib/site-data";
import { Award, Compass, Heart, Leaf, Users, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tembo Safaris — Local Experts in Tanzanian Travel" },
      { name: "description", content: "Born in Arusha, raised by the bush. Meet the people behind Tanzania's most loved safari company." },
      { property: "og:title", content: "About Tembo Safaris" },
      { property: "og:description", content: "Meet the local team crafting Tanzania's most memorable journeys." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const team = [
  { name: "Joseph Mollel", role: "Founder & Head Guide", image: img.maasai },
  { name: "Amani Kessy", role: "Operations Director", image: img.safariJeep },
  { name: "Neema Lyimo", role: "Travel Designer", image: img.luxuryLodge },
  { name: "Hassan Juma", role: "Kilimanjaro Lead Guide", image: img.kilimanjaro },
];

const values = [
  { icon: Leaf, t: "Conservation", d: "1% of every booking funds local wildlife protection." },
  { icon: Heart, t: "Community", d: "We hire and train locally — 92% of our team is Tanzanian." },
  { icon: ShieldCheck, t: "Safety", d: "Modern fleet, satellite comms, comprehensive insurance." },
  { icon: Compass, t: "Authenticity", d: "Real experiences, never staged. Off the beaten track." },
];

function About() {
  return (
    <>
      <PageHero
        image={img.maasai}
        eyebrow="Our Story"
        title="Local roots. Global standards."
        subtitle="Born in Arusha. Raised in the bush. Driven to share Tanzania at its honest best."
      />

      <section className="py-24 container-x grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--sunset)] mb-4">Since 2009</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">A safari company built by guides, not by office desks.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Tembo Safaris was founded by Joseph Mollel, a Maasai-born guide who spent his twenties leading expeditions across the Serengeti. After fifteen years in the field, he set out to build the company he always wished existed: small enough to be personal, big enough to deliver perfection.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today our team of 40+ Tanzanians designs, leads and reviews every trip. We don't sell from a catalogue — we plan trips the way we'd plan one for our families.
          </p>
        </div>
        <img src={img.safariJeep} alt="Our team in the field" loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] h-[520px] w-full object-cover" />
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-card rounded-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--sunset)] mb-3">Our Mission</p>
            <h3 className="font-display text-3xl">Make Tanzania accessible — authentically.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">To open the wild beauty of our country to the world while protecting the people, wildlife and landscapes that make it extraordinary.</p>
          </div>
          <div className="p-10 bg-foreground text-background rounded-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Our Vision</p>
            <h3 className="font-display text-3xl">Tanzania's most trusted safari company.</h3>
            <p className="mt-4 text-background/75 leading-relaxed">A brand known equally for its hospitality, its honesty, and its commitment to the communities and ecosystems it serves.</p>
          </div>
        </div>
      </section>

      <section className="py-24 container-x">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--sunset)] mb-3">Values</p>
          <h2 className="font-display text-4xl md:text-5xl">What we stand for</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, t, d }) => (
            <div key={t} className="p-8 bg-card border border-border rounded-2xl hover:-translate-y-1 transition-transform">
              <div className="h-12 w-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-[var(--sunset)]" />
              </div>
              <h3 className="font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-x">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--sunset)] mb-3">The People</p>
            <h2 className="font-display text-4xl md:text-5xl">Meet your hosts</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <img src={m.image} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="mt-4">
                  <div className="font-display text-lg">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 container-x">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: Award, t: "TATO Member", d: "Tanzania Association of Tour Operators" },
            { icon: ShieldCheck, t: "TTB Licensed", d: "Tanzania Tourism Board · Class A" },
            { icon: Users, t: "Wilderness First Aid", d: "All guides certified annually" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="p-8 border border-border rounded-2xl">
              <Icon className="h-8 w-8 mx-auto text-[var(--sunset)]" />
              <h3 className="font-display text-xl mt-4">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
