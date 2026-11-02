import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const accentMap = {
  lavender: { bg: 'bg-lavender-100', text: 'text-lavender-600', ring: 'group-hover:ring-lavender-300' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-600', ring: 'group-hover:ring-rose-300' },
  sage: { bg: 'bg-sage-100', text: 'text-sage-600', ring: 'group-hover:ring-sage-300' },
  sky: { bg: 'bg-sky-100', text: 'text-sky-500', ring: 'group-hover:ring-sky-300' },
  honey: { bg: 'bg-honey-100', text: 'text-sage-600', ring: 'group-hover:ring-honey-300' },
  peach: { bg: 'bg-peach-100', text: 'text-rose-600', ring: 'group-hover:ring-peach-300' },
};

export default function ServiceCard({ service }) {
  const a = accentMap[service.accent];
  return (
    <Reveal>
      <Link
        to={`/how-can-i-help#${service.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-4xl bg-cream-50 shadow-soft ring-1 ring-ink-900/[0.05] transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />
          <span className={`absolute left-4 top-4 rounded-full ${a.bg} px-3 py-1 text-xs font-medium ${a.text}`}>
            {service.tagline}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="text-h4">{service.title}</h3>
          <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-700">{service.description}</p>
          <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${a.text}`}>
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
