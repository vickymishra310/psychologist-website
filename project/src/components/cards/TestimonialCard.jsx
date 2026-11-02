import { Quote } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="flex h-full flex-col gap-5 rounded-4xl bg-cream-100 p-8 shadow-soft ring-1 ring-ink-900/[0.04]">
        <Quote className="h-7 w-7 text-sage-300" strokeWidth={1.4} />
        <blockquote className="flex-1 font-serif text-lg leading-relaxed text-ink-800">
          "{testimonial.quote}"
        </blockquote>
        <figcaption className="flex items-center gap-3 border-t border-ink-900/10 pt-5">
          <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-200 text-sage-700">
            <Quote className="h-4 w-4" strokeWidth={1.6} />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-ink-900">{testimonial.name}</span>
            <span className="text-xs text-ink-700/60">{testimonial.context}</span>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}
