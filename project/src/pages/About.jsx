import { ArrowRight, GraduationCap, Award, Heart, Leaf, Compass } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';
import { site } from '@/data/site';

const portraitImage =
  'https://images.pexels.com/photos/35555301/pexels-photo-35555301.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';
const secondaryImage =
  'https://images.pexels.com/photos/7176302/pexels-photo-7176302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const credentials = [
  { year: '2012', text: 'Doctorate in Clinical Psychology (DClinPsy), University College London' },
  { year: '2014', text: 'BACP Accreditation — Integrative Psychotherapy' },
  { year: '2016', text: 'Advanced training in Compassion-Focused Therapy (CFT)' },
  { year: '2019', text: 'Certification in Acceptance & Commitment Therapy (ACT)' },
];

const values = [
  { Icon: Heart, title: 'Compassion first', text: 'Every person who walks through my door is met with warmth, not judgment. You are never too much, too complicated, or too broken.' },
  { Icon: Leaf, title: 'Pace matters', text: 'Healing is not a race. We move at the speed that feels safe for you — gently, and always with your consent.' },
  { Icon: Compass, title: 'Honesty, kindly', text: 'I will be honest with you, but never harsh. Growth needs truth, and truth needs tenderness.' },
  { Icon: GraduationCap, title: 'Grounded in evidence', text: 'My work is informed by research and ongoing training, but it always serves the human sitting in front of me.' },
];

const approachSteps = [
  { title: 'Understanding you', text: 'We begin by getting curious about your story — what brings you here, what you have been carrying, and what you hope might change.' },
  { title: 'Finding the patterns', text: 'Together we gently notice the patterns that have been running beneath the surface — the ones that protect you, and the ones that no longer serve you.' },
  { title: 'Building new tools', text: 'We develop practical, evidence-based ways to calm your nervous system, meet difficult feelings, and respond to life with more choice.' },
  { title: 'Growing into yourself', text: 'Over time, the work deepens. You begin to relate to yourself and others differently — with more clarity, compassion, and freedom.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Meet Nikhitha Chaudhary"
        intro="A psychologist who believes therapy should feel less like a clinical appointment and more like being genuinely understood — by someone who is trained, present, and on your side."
      />

      {/* Portrait + intro */}
      <section className="container-well py-20 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-5xl shadow-soft-lg">
              <img src={portraitImage} alt={site.shortName} className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="mt-5 rounded-4xl bg-cream-100 p-6 ring-1 ring-ink-900/[0.04]">
              <p className="font-serif text-lg text-ink-900">{site.name}</p>
              <p className="text-sm text-ink-700/70">{site.role} · {site.credentials}</p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal>
              <div className="prose-well">
                <p>
                  I'm Nikhitha. For over twelve years, I have sat with people in some of the most tender
                  moments of their lives — and I have learned that the thing we want most is rarely
                  complicated. We want to feel <em>safe enough</em> to be honest. We want to be met, not
                  fixed. We want someone who listens as though our story matters.
                </p>
                <p>
                  My path to psychology was not a straight line. I came to it through my own experience
                  of feeling lost in my twenties — of looking fine on the outside while quietly
                  unravelling. Therapy changed something in me that I could not have changed alone. It
                  taught me that being seen, without performance, is one of the most healing things a
                  person can experience.
                </p>
                <p>
                  That belief shapes everything about how I work. I am trained, accredited, and
                  evidence-based — but above all, I am human in the room with you. I will not hand you a
                  worksheet and call it care. I will sit with you, stay curious, and help you find your
                  own way through.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-4xl bg-sage-100 p-8 ring-1 ring-sage-200">
                <p className="font-serif text-xl italic leading-relaxed text-ink-800">
                  "You don't have to have the right words, or know where to begin. You just have to be
                  willing to show up. We will figure out the rest together."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach steps */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="container-well">
          <SectionHeading
            eyebrow="My approach"
            title="How we will work together"
            intro="Therapy is a relationship, not a procedure. Here is what that journey tends to look like — though it is always shaped around you."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <div className="flex h-full flex-col gap-4 rounded-4xl bg-cream-50 p-7 shadow-soft ring-1 ring-ink-900/[0.04]">
                  <span className="font-serif text-3xl text-sage-300">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-h4">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-700">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-well py-20 lg:py-28">
        <SectionHeading
          eyebrow="What I believe"
          title="The values that shape my practice"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="flex h-full flex-col gap-4 rounded-4xl bg-cream-100 p-7 ring-1 ring-ink-900/[0.04]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
                  <v.Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="text-base font-medium text-ink-900">{v.title}</h3>
                <p className="text-sm leading-relaxed text-ink-700">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Credentials timeline */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="container-well">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-5xl shadow-soft-lg">
                <img src={secondaryImage} alt="A therapy session in progress" className="aspect-[4/3] w-full object-cover" />
              </div>
            </Reveal>
            <div className="flex flex-col gap-8">
              <SectionHeading
                align="left"
                eyebrow="Training & credentials"
                title="Qualified, accredited, and always learning"
                intro="Therapy is a craft I continue to deepen. These are the formal milestones — but the real training happens in every session."
              />
              <div className="flex flex-col">
                {credentials.map((c, i) => (
                  <Reveal key={c.year} delay={i * 80}>
                    <div className="flex gap-6 border-b border-ink-900/10 py-5">
                      <span className="font-serif text-2xl text-sage-500">{c.year}</span>
                      <p className="text-ink-700">{c.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={120}>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-100 px-4 py-2 text-sm text-sage-700">
                    <Award className="h-4 w-4" /> HCPC Registered
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-lavender-100 px-4 py-2 text-sm text-lavender-600">
                    <Award className="h-4 w-4" /> BACP Accredited
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's begin with a conversation"
        text="There is no pressure, only a warm, confidential space. Book a free 15-minute consultation and we'll explore whether we are a good fit."
      />
    </>
  );
}
