import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { site, navLinks } from '@/data/site';

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Disclaimer', to: '/disclaimer' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
];

const socials = [
  { Icon: Instagram, href: site.instagram, label: 'Instagram' },
  { Icon: Linkedin, href: site.linkedin, label: 'LinkedIn' },
  { Icon: Youtube, href: site.youtube, label: 'YouTube' },
  { Icon: MessageCircle, href: site.threads, label: 'Threads' },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink-900 text-cream-100">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-sage-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-lavender-500/15 blur-3xl" />

      <div className="container-well relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage-400 text-cream-50">
                <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                  <path d="M16 7c-3.5 0-6 2.8-6 6.2 0 3.8 3 7.2 6 9.8 3-2.6 6-6 6-9.8C22 9.8 19.5 7 16 7z" />
                  <circle cx="16" cy="13.2" r="1.7" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg text-cream-50">{site.shortName}</span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-sage-300">{site.role.split(' & ')[0]}</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-cream-200/70">
              {site.tagline} A calm, confidential space to understand yourself and grow.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 text-cream-100 ring-1 ring-cream-50/10 transition-all duration-300 hover:bg-sage-500 hover:text-cream-50"
                >
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-base text-cream-50">Explore</h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-200/70 underline decoration-transparent underline-offset-4 transition-all hover:text-cream-50 hover:decoration-sage-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-base text-cream-50">Legal</h3>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-200/70 underline decoration-transparent underline-offset-4 transition-all hover:text-cream-50 hover:decoration-sage-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-base text-cream-50">Get in touch</h3>
            <ul className="flex flex-col gap-3.5 text-sm text-cream-200/70">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 rounded-lg transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300">
                  <Mail className="h-4 w-4 text-sage-300" strokeWidth={1.6} />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 rounded-lg transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300">
                  <Phone className="h-4 w-4 text-sage-300" strokeWidth={1.6} />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-sage-300" strokeWidth={1.6} />
                {site.location}
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-sage-500 px-5 py-2.5 text-sm font-medium text-cream-50 transition-all hover:bg-sage-400 hover:shadow-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
            >
              Book a Session
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream-50/10 pt-7 text-center text-xs text-cream-200/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-cream-200/40">{site.credentials} · BACP Member No. 123456</p>
        </div>
      </div>
    </footer>
  );
}
