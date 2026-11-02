import Reveal from '@/components/ui/Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  className = '',
}) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-h2 text-balance">{title}</h2>
      {intro && <p className="text-pretty text-lg leading-relaxed text-ink-700">{intro}</p>}
    </Reveal>
  );
}
