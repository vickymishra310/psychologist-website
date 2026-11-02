import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';
import BlogCard from '@/components/cards/BlogCard';
import { blogPosts } from '@/data/content';
import { site } from '@/data/site';

const categoryColors = {
  Anxiety: 'bg-lavender-100 text-lavender-600',
  Relationships: 'bg-rose-100 text-rose-600',
  'Self-Esteem': 'bg-peach-100 text-rose-600',
  Career: 'bg-sky-100 text-sky-500',
};

export default function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fallbackRelated = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedPosts = related.length >= 2 ? related : fallbackRelated;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-100 pt-32 pb-12 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
        <div className="container-narrow relative">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-ink-700 transition-colors hover:text-ink-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to journal
            </Link>
          </Reveal>
          <Reveal delay={80} className="mt-8">
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${categoryColors[post.category]}`}>
              {post.category}
            </span>
          </Reveal>
          <Reveal delay={140} className="mt-5">
            <h1 className="text-h1 text-balance">{post.title}</h1>
          </Reveal>
          <Reveal delay={200} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-700/70">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-700/30" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-700/30" />
            <span>By {post.author}</span>
          </Reveal>
        </div>
      </section>

      {/* Cover image */}
      <section className="container-well py-10 lg:py-14">
        <Reveal>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-5xl shadow-soft-lg">
            <img src={post.image} alt={post.title} className="aspect-[16/8] w-full object-cover" />
          </div>
        </Reveal>
      </section>

      {/* Body */}
      <article className="container-narrow py-10 lg:py-14">
        <Reveal>
          <div className="prose-well">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>

        {/* Author box */}
        <Reveal delay={120} className="mt-14">
          <div className="flex flex-col gap-5 rounded-4xl bg-cream-100 p-8 sm:flex-row sm:items-center">
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-sage-200 font-serif text-2xl text-sage-700">
              E
            </span>
            <div>
              <p className="font-serif text-lg text-ink-900">{site.name}</p>
              <p className="text-sm text-ink-700">{site.role} · {site.credentials}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
                If this resonated and you'd like to explore it further, you are welcome to reach out —
                no pressure, only a warm, confidential space.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-10 flex flex-col items-center gap-4">
          <Button to="/contact" size="lg">
            Book a Session
            <ArrowRight className="h-4.5 w-4.5" />
          </Button>
        </Reveal>
      </article>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-cream-100 py-20 lg:py-28">
          <div className="container-well">
            <Reveal>
              <h2 className="text-h3 mb-10">Continue reading</h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p, i) => (
                <BlogCard key={p.slug} post={p} delay={i * 80} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
