import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-cream-100 pt-28">
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-lavender-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-72 w-72 rounded-full bg-sage-200/40 blur-3xl" />

      <div className="container-narrow relative text-center">
        <Reveal>
          <span className="font-serif text-[8rem] leading-none text-sage-300 sm:text-[12rem]">404</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-4 text-h2">This page has wandered off</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-4 max-w-md text-lg text-ink-700">
            The page you are looking for could not be found. Let's find your way back.
          </p>
        </Reveal>
        <Reveal delay={220} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/" size="lg">
            <Home className="h-4.5 w-4.5" />
            Back home
          </Button>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-medium text-ink-800 ring-1 ring-ink-900/15 transition-all hover:bg-cream-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Contact Nikhitha Chaudhary
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
