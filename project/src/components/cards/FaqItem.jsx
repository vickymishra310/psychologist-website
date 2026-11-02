import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function FaqItem({ faq, delay = 0 }) {
  const [open, setOpen] = useState(false);
  const answerId = useId();

  return (
    <Reveal delay={delay}>
      <div className="border-b border-ink-900/10 py-1">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-controls={answerId}
          aria-expanded={open}
          className="group flex w-full items-center justify-between gap-6 rounded-2xl px-3 py-5 text-left transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 active:bg-cream-200"
        >
          <span className="font-serif text-lg text-ink-900 transition-colors group-hover:text-sage-700">{faq.question}</span>
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600 transition-colors duration-300 group-hover:bg-sage-200">
            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </button>
        <div
          id={answerId}
          aria-hidden={!open}
          className={`grid transition-all duration-500 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="pb-6 pr-14 text-[0.9375rem] leading-relaxed text-ink-700">{faq.answer}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
