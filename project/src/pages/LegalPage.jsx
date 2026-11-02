import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

export default function LegalPage({ title, eyebrow = 'Legal', intro, updated, sections }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} align="left" />

      <section className="container-well py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <Reveal className="sticky top-28">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-ink-700 transition-colors hover:text-ink-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back home
              </Link>
              <nav className="mt-8 flex flex-col gap-2 border-l border-ink-900/10 pl-4">
                {sections.map((s, i) => (
                  <a
                    key={i}
                    href={`#section-${i}`}
                    className="rounded-sm text-sm text-ink-700 transition-colors hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
                  >
                    {s.heading}
                  </a>
                ))}
              </nav>
              {updated && (
                <p className="mt-8 text-xs text-ink-700/60">Last updated: {updated}</p>
              )}
            </Reveal>
          </aside>

          {/* Content */}
          <div className="max-w-prose-well">
            {updated && <p className="mb-8 text-sm text-ink-700/60 lg:hidden">Last updated: {updated}</p>}
            <div className="flex flex-col gap-10">
              {sections.map((section, i) => (
                <Reveal key={i} id={`section-${i}`} className="scroll-mt-28">
                  <h2 className="text-h3 mb-4">{section.heading}</h2>
                  <div className="prose-well">{section.body}</div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-16 rounded-4xl bg-cream-100 p-8 ring-1 ring-ink-900/[0.04]">
              <p className="text-sm leading-relaxed text-ink-700">
                If you have any questions about this policy, please get in touch at{' '}
                <a href={`mailto:${site.email}`} className="link-quiet">{site.email}</a>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
