import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Journal" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "SW">("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full font-display text-lg font-bold transition-colors",
              scrolled ? "bg-[var(--forest)] text-background" : "bg-[var(--gold)] text-foreground"
            )}
          >
            T
          </span>
          <span
            className={cn(
              "font-display text-xl tracking-tight transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            Tembo<span className="text-[var(--gold)]">Safaris</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={cn(
                "text-sm font-medium gold-underline transition-colors",
                scrolled ? "text-foreground hover:text-[var(--sunset)]" : "text-white/90 hover:text-white"
              )}
              activeProps={{ className: "text-[var(--sunset)]" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "EN" ? "SW" : "EN")}
            className={cn(
              "hidden md:flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors",
              scrolled
                ? "border-border text-foreground hover:bg-secondary"
                : "border-white/30 text-white hover:bg-white/10"
            )}
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang} · USD
          </button>
          <Button asChild variant="default" size="sm" className="hidden md:inline-flex bg-[var(--sunset)] hover:bg-[var(--sunset)]/90 text-white rounded-full px-5">
            <Link to="/contact">Book Safari</Link>
          </Button>
          <button
            className={cn(
              "lg:hidden p-2 rounded-md",
              scrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container-x py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground hover:text-[var(--sunset)]"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-[var(--sunset)] text-white rounded-full">
              <Link to="/contact">Book Safari</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
