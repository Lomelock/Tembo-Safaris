import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/255754000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.18_145)] text-white shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-[oklch(0.65_0.18_145)] opacity-40 animate-ping" />
    </a>
  );
}
