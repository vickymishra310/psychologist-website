import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { navLinks, site } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/85 shadow-soft backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-well flex h-18 items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage-400 text-cream-50 shadow-soft transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
              <path d="M16 7c-3.5 0-6 2.8-6 6.2 0 3.8 3 7.2 6 9.8 3-2.6 6-6 6-9.8C22 9.8 19.5 7 16 7z" />
              <circle cx="16" cy="13.2" r="1.7" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-medium text-ink-900">{site.shortName}</span>
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-sage-600">{site.role.split(' & ')[0]}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 ${
                  isActive
                    ? 'bg-sage-100 text-ink-900 shadow-sm'
                    : 'text-ink-700 hover:bg-cream-200/80 hover:text-ink-900 active:bg-cream-200'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-sage-500 px-5 py-2.5 text-sm font-medium text-cream-50 shadow-soft transition-all duration-300 hover:bg-sage-600 hover:shadow-soft-lg active:scale-[0.98] sm:inline-flex lg:px-6"
          >
            <Calendar className="h-4 w-4" />
            Book a Session
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink-800 ring-1 ring-ink-900/10 transition-all hover:bg-cream-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        aria-hidden={!open}
        inert={!open}
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-well pb-8 pt-2">
          <div className="flex flex-col gap-1 rounded-4xl bg-cream-100 p-4 shadow-soft-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 ${
                    isActive ? 'bg-sage-100 text-ink-900 shadow-sm' : 'text-ink-700 hover:bg-cream-200 active:bg-cream-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-sage-500 px-5 py-3.5 text-base font-medium text-cream-50 shadow-soft transition-all hover:bg-sage-600 hover:shadow-soft-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
            >
              <Calendar className="h-5 w-5" />
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
