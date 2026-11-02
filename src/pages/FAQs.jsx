import { Mail } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import FaqItem from '@/components/cards/FaqItem';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { faqs } from '@/data/content';
import { site } from '@/data/site';

export default function FAQs() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions you may be holding"
        intro="It is completely normal to have questions before starting therapy. Here are the ones I hear most often — and if yours is not here, you are always welcome to ask."
      />

      <section className="container-narrow py-20 lg:py-28">
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} delay={i * 50} />
          ))}
        </div>

        {/* Still have questions */}
        <Reveal delay={200} className="mt-16">
          <div className="flex flex-col items-center gap-6 rounded-5xl bg-sage-100 p-10 text-center lg:p-14">
            <h2 className="text-h3">Still have a question?</h2>
            <p className="max-w-md text-ink-700">
              There is no such thing as a silly question. Reach out — I would genuinely like to help you
              feel clearer and more at ease.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" size="lg">
                Send a message
              </Button>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium text-ink-800 ring-1 ring-ink-900/15 transition-all hover:bg-cream-100 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
