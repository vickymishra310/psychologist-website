import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/data/content';

const heroImage =
  'https://images.pexels.com/photos/6963537/pexels-photo-6963537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const accentBg = {
  lavender: 'bg-lavender-100',
  rose: 'bg-rose-100',
  sage: 'bg-sage-100',
  sky: 'bg-sky-100',
  honey: 'bg-honey-100',
  peach: 'bg-peach-100',
};
const accentText = {
  lavender: 'text-lavender-600',
  rose: 'text-rose-600',
  sage: 'text-sage-600',
  sky: 'text-sky-500',
  honey: 'text-sage-600',
  peach: 'text-rose-600',
};

export default function HowCanIHelp() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [hash]);

  return (
    <>
      <PageHero
        eyebrow="How Can I Help"
        title="Support for the whole of you"
        intro="Whatever you are moving through, you don't have to name it perfectly before reaching out. These are the areas I work with most often — but every person's experience is their own."
        image={heroImage}
      />

      {/* Service detail sections */}
      <div className="flex flex-col">
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-20 lg:py-28 ${i % 2 === 0 ? 'bg-cream-50' : 'bg-cream-100'}`}
          >
            <div className="container-well">
              <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                <Reveal className="[direction:ltr]">
                  <div className="relative overflow-hidden rounded-5xl shadow-soft-lg">
                    <img src={service.image} alt={service.title} className="aspect-[4/3] w-full object-cover" />
                    <span className={`absolute left-5 top-5 rounded-full ${accentBg[service.accent]} px-4 py-1.5 text-xs font-medium ${accentText[service.accent]}`}>
                      {service.tagline}
                    </span>
                  </div>
                </Reveal>

                <div className="flex flex-col gap-6 [direction:ltr]">
                  <Reveal>
                    <span className="eyebrow">Area of support</span>
                    <h2 className="mt-3 text-h2">{service.title}</h2>
                  </Reveal>
                  <Reveal delay={100}>
                    <p className="text-pretty text-lg leading-relaxed text-ink-700">{service.description}</p>
                  </Reveal>

                  <Reveal delay={160}>
                    <div className="rounded-4xl bg-cream-50 p-6 ring-1 ring-ink-900/[0.05]">
                      <p className="mb-4 text-sm font-medium uppercase tracking-wider text-ink-700/60">
                        You might recognise
                      </p>
                      <ul className="flex flex-col gap-3">
                        {service.symptoms.map((s) => (
                          <li key={s} className="flex items-start gap-3 text-ink-700">
                            <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${accentText[service.accent]}`} strokeWidth={2} />
                            <span className="text-[0.9375rem]">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  <Reveal delay={220}>
                    <div>
                      <p className="mb-2 text-sm font-medium uppercase tracking-wider text-ink-700/60">How we approach it</p>
                      <p className="text-ink-700">{service.approach}</p>
                    </div>
                  </Reveal>

                  <Reveal delay={280}>
                    <Button to="/contact" variant="outline">
                      Book a session for {service.title}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Other services */}
      <section className="container-well py-20 lg:py-28">
        <SectionHeading
          eyebrow="Also available"
          title="Other ways we can work together"
          intro="Beyond the core areas above, I also offer these additional services."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Couples Therapy', text: 'A space for two people to understand each other more deeply, break old cycles, and rebuild connection.', icon: '🤝' },
            { title: 'Online Sessions', text: 'Secure video sessions for those who prefer the comfort of their own space, or live further afield.', icon: '💻' },
            { title: 'Young Adults (18-25)', text: 'Support tailored to the particular challenges of early adulthood — identity, transition, and finding your footing.', icon: '🌱' },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="flex h-full flex-col gap-4 rounded-4xl bg-cream-100 p-8 ring-1 ring-ink-900/[0.04]">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="text-h4">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-700">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure where you fit?"
        text="You don't need a label to begin. If something here resonates — or even if it doesn't — reach out and we will find the right way forward together."
      />
    </>
  );
}
