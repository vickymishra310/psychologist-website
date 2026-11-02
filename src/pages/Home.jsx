import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, HeartHandshake, Leaf, ShieldCheck, Clock, MapPin } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/cards/ServiceCard';
import BlogCard from '@/components/cards/BlogCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import CTASection from '@/components/sections/CTASection';
import { services, blogPosts, testimonials } from '@/data/content';
import { site } from '@/data/site';

const heroImage =
  '/home-hero-illustration.webp';
const aboutImage =
  'https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';

const trustPoints = [
  { Icon: ShieldCheck, title: 'Confidential & safe', text: 'A private, judgment-free space held with care.' },
  { Icon: HeartHandshake, title: 'Human, not clinical', text: 'Therapy that feels warm, personal, and real.' },
  { Icon: Leaf, title: 'Gentle & paced', text: 'We move at your speed — never pushed, never rushed.' },
  { Icon: Sparkles, title: 'Evidence-based', text: 'Approaches grounded in research and experience.' },
];

export default function Home() {
  const recentPosts = blogPosts.slice(0, 3);
  const homeTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-100 pt-28 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
        <div className="pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full bg-sage-200/40 blur-3xl" />

        <div className="container-well relative pb-16 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="relative z-10 flex flex-col gap-7 lg:pr-4">
              <Reveal>
                <span className="eyebrow">
                  <span className="h-px w-8 bg-sage-400" />
                  A calmer way forward
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="max-w-m text-display text-balance">
                  Therapy that{' '}
                  <span className="italic text-sage-600">meets</span> you where you are.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="max-w-lg text-pretty text-m leading-relaxed text-ink-700 sm:text-xl ">
                  Warm, thoughtful support for anxiety, relationships, self-esteem, and life's crossroads with space to feel understood and move at your own pace.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button to="/contact" size="lg">
                    Begin your journey
                    <ArrowRight className="h-4.5 w-4.5" />
                  </Button>
                  <Button to="/how-can-i-help" variant="outline" size="lg">
                    Explore support
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-700/70">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-sage-500" /> Free 15-min consultation
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-sage-500" /> {site.location}
                  </span>
                </div>
              </Reveal>

              {/* <Reveal delay={380}>
                <div className="mt-3 grid max-w-xl grid-cols-3 divide-x divide-ink-900/10 rounded-3xl bg-cream-50/80 px-4 py-5 shadow-soft ring-1 ring-ink-900/[0.05] backdrop-blur-sm sm:px-6">
                  <div className="pr-3 sm:pr-5">
                    <strong className="block font-serif text-2xl text-ink-900 sm:text-3xl">4</strong>
                    <span className="mt-1 block text-[10px] uppercase tracking-wider text-ink-700/60 sm:text-xs">Years of care</span>
                  </div>
                  <div className="px-3 sm:px-5">
                    <strong className="block font-serif text-2xl text-ink-900 sm:text-3xl">65</strong>
                    <span className="mt-1 block text-[10px] uppercase tracking-wider text-ink-700/60 sm:text-xs">People supported</span>
                  </div>
                  <div className="pl-3 sm:pl-5">
                    <strong className="block font-serif text-2xl text-ink-900 sm:text-3xl">1:1</strong>
                    <span className="mt-1 block text-[10px] uppercase tracking-wider text-ink-700/60 sm:text-xs">Personal approach</span>
                  </div>
                </div>
              </Reveal> */}
            </div>

            <Reveal delay={180} className="relative self-center lg:-translate-y-2">
              <div className="relative mx-auto max-w-[820px] ">
                <img
                  src={heroImage}
                  alt="Illustration of a woman reflecting on her wellbeing at home"
                  className="mx-auto block aspect-[3/2] w-full object-contain object-center"
                />
                {/* <div className="ml-auto mt-3 max-w-[240px] rounded-2xl bg-sage-700 px-4 py-3 text-cream-50 shadow-soft-lg sm:absolute sm:bottom-8 sm:right-8 sm:mt-0 sm:rounded-3xl sm:px-6 sm:py-5">
                  <Sparkles className="mb-2 h-4 w-4 text-honey-300 sm:mb-3 sm:h-5 sm:w-5" strokeWidth={1.7} />
                  <p className="font-serif text-lg leading-tight sm:text-2xl">A safe space to come back to yourself.</p>
                </div> */}
              </div>

              {/* circle */}
              {/* <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-sage-300/60 sm:h-40 sm:w-40" /> */}
              <div className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 animate-float-slow rounded-full bg-honey-200/70 blur-xl" />
            </Reveal>
          </div>
        </div>
        <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-12 w-full text-sage-100 sm:h-16" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0 48C180 8 270 100 450 69s260-67 430-28 340 62 560 5v54H0Z" />
        </svg>
      </section>

      {/* Trust strip */}
      <section className="bg-sage-100 py-14 lg:py-18">
        <div className="container-well grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <div className="flex h-full flex-col gap-3 rounded-4xl bg-cream-50/80 p-6 ring-1 ring-ink-900/[0.04]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-200/70 text-sage-700">
                  <t.Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="text-base font-medium text-ink-900">{t.title}</h3>
                <p className="text-sm leading-relaxed text-ink-700">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-sage-100 py-20 lg:py-28">
        <div className="container-well">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-5xl shadow-soft-lg">
                <img src={aboutImage} alt={site.shortName} className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="absolute -right-4 -top-4 hidden rounded-3xl bg-lavender-100 px-5 py-4 text-center shadow-soft sm:block">
                <span className="font-serif text-3xl text-lavender-600">4</span>
                <span className="block text-xs uppercase tracking-wider text-ink-700/60">years of practice</span>
              </div>
            </Reveal>
            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="About"
                title="A calm space to be fully yourself"
                intro="I believe therapy should feel human first. My approach blends evidence-based practice with warmth, curiosity, and respect for your pace — so that understanding yourself feels less like a clinical exercise and more like coming home."
              />
              <Reveal delay={120}>
                <ul className="flex flex-col gap-3">
                  {[
                    'Doctorate in Clinical Psychology (DClinPsy)',
                    'BACP accredited & HCPC registered',
                    'Integrative approach: CBT, ACT, attachment & compassion-focused',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-700">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <Button to="/about" variant="outline">
                  Meet Nikhitha Chaudhary
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-well py-20 lg:py-28">
        <SectionHeading
          eyebrow="How I can help"
          title="Support for what you're moving through"
          intro="Whether you're carrying anxiety, navigating a relationship, questioning your path, or simply wanting to understand yourself more deeply — there is a place here for you."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Button to="/how-can-i-help" variant="ghost">
            See all areas of support
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </section>

      {/* Approach / philosophy quote */}
      <section className="relative overflow-hidden bg-sage-500 py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-cream-50/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-lavender-300/20 blur-3xl" />
        <div className="container-narrow relative text-center">
          <Reveal>
            <span className="eyebrow text-cream-50/70">My philosophy</span>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="mt-6 font-serif text-h3 leading-snug text-cream-50 text-balance sm:text-h2">
              "Healing doesn't happen by fixing what's broken. It happens by being met — gently,
              honestly, and without judgment — until you remember you were never broken at all."
            </blockquote>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-cream-50/70">{site.shortName}</p>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-sage-500 py-20 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-cream-50/10 blur-3xl" />
        <div className="container-well relative">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <span className="eyebrow text-cream-50/75">Testimonials</span>
            <h2 className="text-h2 text-balance text-cream-50">Words from those who've been here</h2>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-cream-50/85">Real reflections from people who took the first step. Names are kept private to protect confidentiality.</p>
          </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {homeTestimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} delay={i * 80} />
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Button to="/testimonials" variant="ghost">
            Read more stories
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="container-well">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="From the journal"
              title="Thoughts on healing & growth"
              intro="Educational reflections on anxiety, relationships, self-esteem, and the quieter questions of being human."
            />
            <Reveal>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-600 hover:text-sage-700"
              >
                All articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
