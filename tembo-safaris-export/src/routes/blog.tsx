import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { blog, img } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Travel Journal — Tanzania Safari Tips & Stories" },
      { name: "description", content: "Insider tips, packing guides and stories from the Tanzanian bush by Tembo's local guides." },
      { property: "og:title", content: "Tembo Travel Journal" },
      { property: "og:description", content: "Tanzania travel tips, safari stories and cultural insights." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [hero, ...rest] = blog;
  return (
    <>
      <PageHero
        image={img.balloon}
        eyebrow="Travel Journal"
        title="Stories from the bush."
        subtitle="Guides, tips and tales — straight from the people who live and lead them."
      />

      <section className="py-20 container-x">
        <Link to="/blog" className="group grid lg:grid-cols-2 gap-10 items-center mb-20 bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={hero.image} alt={hero.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="p-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--sunset)] mb-3">Featured · {hero.date}</p>
            <h2 className="font-display text-3xl md:text-4xl text-balance">{hero.title}</h2>
            <p className="mt-4 text-muted-foreground">{hero.excerpt}</p>
            <span className="mt-6 inline-flex items-center text-sm font-medium text-[var(--sunset)] gold-underline">
              Read article <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </Link>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link to="/blog" key={post.slug} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="mt-5">
                <p className="text-xs tracking-wider uppercase text-muted-foreground">{post.date}</p>
                <h3 className="mt-2 font-display text-xl group-hover:text-[var(--sunset)] transition-colors">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
