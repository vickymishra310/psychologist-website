import { MessageCircle } from 'lucide-react';
import { site } from '@/data/site';

export default function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello ${site.shortName}, I'd like to enquire about booking a session.`,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sage-500 text-cream-50 shadow-lift transition-all duration-300 hover:scale-105 hover:bg-sage-600 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink-900 px-4 py-2 text-sm text-cream-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Chat with me
      </span>
      <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-300 opacity-60" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-rose-400" />
      </span>
    </a>
  );
}
