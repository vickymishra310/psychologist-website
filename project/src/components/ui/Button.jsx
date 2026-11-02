import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 disabled:cursor-not-allowed disabled:opacity-50';

const variants = {
  primary:
    'bg-sage-500 text-cream-50 shadow-soft hover:bg-sage-600 hover:shadow-soft-lg active:scale-[0.98]',
  secondary:
    'bg-cream-100 text-ink-800 ring-1 ring-ink-900/10 hover:bg-cream-200 active:scale-[0.98]',
  ghost:
    'text-ink-700 hover:bg-cream-200/70 hover:text-ink-900 active:bg-cream-200',
  outline:
    'bg-transparent text-ink-800 ring-1 ring-ink-900/15 hover:bg-cream-100 hover:ring-sage-400 active:scale-[0.98] active:bg-cream-200',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
