import Reveal from '@/components/ui/Reveal';

export default function PageHero({ eyebrow, title, intro, image, align = 'center' }) {
  const centered = align === 'center';
  return (
    <section className="relative overflow-hidden bg-cream-100 pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-lavender-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-sage-200/40 blur-3xl" />

      <div className="container-well relative">
        <div className={`flex flex-col gap-5 ${centered ? 'mx-auto max-w-3xl text-center items-center' : 'max-w-2xl'}`}>
          {eyebrow && <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>}
          <Reveal delay={80}>
            <h1 className="text-h1 text-balance">{title}</h1>
          </Reveal>
          {intro && (
            <Reveal delay={160}>
              <p className="text-pretty text-lg leading-relaxed text-ink-700 sm:text-xl">{intro}</p>
            </Reveal>
          )}
        </div>
        {image && (
          <Reveal delay={200} className="mt-12">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-5xl shadow-soft-lg">
              <img src={image} alt="" className="aspect-[16/8] w-full object-cover" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
