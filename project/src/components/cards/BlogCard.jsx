import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const categoryColors = {
  Anxiety: 'bg-lavender-100 text-lavender-600',
  Relationships: 'bg-rose-100 text-rose-600',
  'Self-Esteem': 'bg-peach-100 text-rose-600',
  Career: 'bg-sky-100 text-sky-500',
};

export default function BlogCard({ post, featured = false }) {
  return (
    <Reveal className="h-full">
      <Link
        to={`/blog/${post.slug}`}
        className={`group flex h-full flex-col overflow-hidden rounded-4xl bg-cream-50 shadow-soft ring-1 ring-ink-900/[0.05] transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 ${
          featured ? 'lg:flex-row' : ''
        }`}
      >
        <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2' : ''}`}>
          <div className={`overflow-hidden ${featured ? 'aspect-[16/10] lg:h-full lg:aspect-auto' : 'aspect-[16/10]'}`}>
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          </div>
          <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${categoryColors[post.category]}`}>
            {post.category}
          </span>
        </div>
        <div className={`flex flex-1 flex-col p-7 ${featured ? 'lg:p-10 lg:justify-center' : ''}`}>
          <div className="mb-3 flex items-center gap-3 text-xs text-ink-700/60">
            <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="h-1 w-1 rounded-full bg-ink-700/30" />
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
          </div>
          <h3 className={`font-serif ${featured ? 'text-h3' : 'text-h4'} text-balance`}>{post.title}</h3>
          <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-700">{post.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-sage-600">
            Read article
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
