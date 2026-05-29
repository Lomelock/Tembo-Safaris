import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.02_50)] text-white/80">
      <div className="container-x py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)] text-foreground font-display text-lg font-bold">T</span>
            <span className="font-display text-xl text-white">
              Tembo<span className="text-[var(--gold)]">Safaris</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/65">
            Crafting unforgettable Tanzanian journeys since 2009 — from the great migration to the white sands of Zanzibar.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/15 hover:bg-[var(--gold)] hover:text-foreground hover:border-transparent transition-all" aria-label="Social link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["Destinations", "/destinations"],
              ["Tour Packages", "/packages"],
              ["Gallery", "/gallery"],
              ["Travel Journal", "/blog"],
              ["About Us", "/about"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-[var(--gold)] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[var(--gold)]" /> Boma Road, Arusha, Tanzania</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-[var(--gold)]" /> +255 754 000 000</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-[var(--gold)]" /> hello@tembosafaris.co.tz</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5">Newsletter</h4>
          <p className="text-sm text-white/65 mb-4">Stories from the bush, delivered monthly.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--gold)]"
            />
            <button className="px-5 py-2.5 rounded-full bg-[var(--gold)] text-foreground text-sm font-medium hover:bg-[var(--sunset)] hover:text-white transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Tembo Safaris Ltd. All rights reserved.</p>
          <p>Licensed by Tanzania Tourism Board · TATO Member</p>
        </div>
      </div>
    </footer>
  );
}
