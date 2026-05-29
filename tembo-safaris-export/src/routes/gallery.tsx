import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { img } from "@/lib/site-data";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Tanzania Safari Photography" },
      { name: "description", content: "Stunning safari photography from the Serengeti, Kilimanjaro, Zanzibar and beyond." },
      { property: "og:title", content: "Gallery — Tembo Safaris" },
      { property: "og:description", content: "Wildlife, landscapes and cultural photography from Tanzania." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const gallery = [
  { src: img.serengeti, alt: "Serengeti elephants at sunset", span: "row-span-2" },
  { src: img.lion, alt: "Lion on rocks", span: "" },
  { src: img.zanzibar, alt: "Zanzibar dhow", span: "" },
  { src: img.maasai, alt: "Maasai dance", span: "row-span-2" },
  { src: img.kilimanjaro, alt: "Mount Kilimanjaro", span: "" },
  { src: img.migration, alt: "Wildebeest migration", span: "row-span-2" },
  { src: img.ngorongoro, alt: "Ngorongoro Crater", span: "" },
  { src: img.elephants, alt: "Elephant herd", span: "" },
  { src: img.balloon, alt: "Hot air balloon", span: "row-span-2" },
  { src: img.flamingos, alt: "Flamingos at Lake Natron", span: "" },
  { src: img.luxuryLodge, alt: "Luxury safari lodge", span: "" },
  { src: img.safariJeep, alt: "Safari jeep with leopard", span: "" },
];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <PageHero
        image={img.lion}
        eyebrow="Gallery"
        title="Tanzania, frame by frame."
        subtitle="Wildlife. Landscapes. People. Captured by our guides and guests."
      />

      <section className="py-20 container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setOpen(g.src)}
              className={`group relative overflow-hidden rounded-xl ${g.span}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button className="absolute top-6 right-6 text-white p-2" aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-full rounded-lg" />
        </div>
      )}
    </>
  );
}
