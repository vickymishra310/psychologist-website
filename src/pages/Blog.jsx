import { useMemo, useState } from 'react';
import PageHero from '@/components/sections/PageHero';
import BlogCard from '@/components/cards/BlogCard';
import Reveal from '@/components/ui/Reveal';
import { blogPosts } from '@/data/content';

const categories = ['All', 'Anxiety', 'Relationships', 'Self-Esteem', 'Career'];

export default function Blog() {
  const [active, setActive] = useState('All');

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const hasActiveFilters = active !== 'All';

  const filtered = useMemo(() => {
    return blogPosts
      .filter((p) => hasActiveFilters || p.slug !== featured.slug)
      .filter((p) => (active === 'All' ? true : p.category === active));
  }, [active, featured.slug, hasActiveFilters]);

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Thoughts on healing & growth"
        intro="Educational reflections on anxiety, relationships, self-esteem, and the quieter questions of being human. Written to inform, not to sell."
      />

      {/* Featured article */}
      {!hasActiveFilters && (
        <section className="container-well py-16 lg:py-20">
          <Reveal>
            <p className="eyebrow mb-6">Featured article</p>
          </Reveal>
          <BlogCard post={featured} featured />
        </section>
      )}

      {/* Category filters */}
      <section className="container-well pb-8">
        <Reveal className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 ${
                active === cat
                  ? 'bg-sage-500 text-cream-50 shadow-soft'
                  : 'bg-cream-100 text-ink-700 ring-1 ring-ink-900/[0.06] hover:bg-cream-200 active:scale-95'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>
      </section>

      {/* Article grid */}
      <section className="container-well pb-20 lg:pb-28">
        {filtered.length === 0 ? (
          <Reveal className="py-20 text-center">
            <p className="text-lg text-ink-700">No articles found in this category.</p>
          </Reveal>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={i * 60} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
