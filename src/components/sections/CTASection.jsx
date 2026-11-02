import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function CTASection({
  title = 'Ready to take the first step?',
  text = 'Reaching out takes courage. Book a free 15-minute consultation, or send a message — there is no pressure, only a warm, confidential space waiting for you.',
  className = '',
}) {
  return (
    <section className={`container-well py-20 lg:py-28 ${className}`}>
      <Reveal>
        <div className="relative overflow-hidden rounded-5xl bg-sage-500 px-7 py-16 text-center shadow-soft-lg sm:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cream-50/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-lavender-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-h2 text-cream-50 text-balance">{title}</h2>
            <p className="text-pretty text-lg leading-relaxed text-cream-50/85">{text}</p>
            <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-7 py-3.5 text-sm font-medium text-sage-700 shadow-soft transition-all duration-300 hover:bg-cream-100 hover:shadow-lift active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-500"
              >
                <Calendar className="h-4.5 w-4.5" />
                Book a Session
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-cream-50 ring-1 ring-cream-50/30 transition-all duration-300 hover:bg-cream-50/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-500"
              >
                Free consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
