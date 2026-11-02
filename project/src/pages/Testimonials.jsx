import { useState } from 'react';
import PageHero from '@/components/sections/PageHero';
import TestimonialCard from '@/components/cards/TestimonialCard';
import Reveal from '@/components/ui/Reveal';
import CTASection from '@/components/sections/CTASection';
import { testimonials } from '@/data/content';

const categories = ['All', 'Anxiety', 'Relationships', 'Self-Esteem', 'Career', 'Personal Growth'];

export default function Testimonials() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? testimonials : testimonials.filter((t) => t.category === active);

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Stories of change"
        intro="Real reflections from people who took the first step. Names and details are kept private to protect confidentiality — what remains is the feeling of being met."
      />

      {/* Filter */}
      <section className="container-well py-12">
        <Reveal className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 ${
                active === cat
                  ? 'bg-sage-500 text-cream-50 shadow-soft'
                  : 'bg-cream-100 text-ink-700 ring-1 ring-ink-900/[0.06] hover:bg-cream-200 active:scale-95'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>
      </section>

      {/* Grid */}
      <section className="container-well pb-20 lg:pb-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} delay={i * 70} />
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="bg-cream-100 py-16">
        <div className="container-narrow text-center">
          <Reveal>
            <p className="text-pretty text-lg leading-relaxed text-ink-700">
              These testimonials are shared with consent. They reflect individual experiences and are
              not a guarantee of any particular outcome — your journey will be your own.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Your story could be next"
        text="Every journey begins with a single, often nervous, step. If something here resonates, you are warmly invited to reach out."
      />
    </>
  );
}
