import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';
import { services } from '@/data/content';
import { supabase } from '@/lib/supabase';

const contactDetails = [
  { Icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { Icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
  { Icon: MapPin, label: 'Location', value: site.location, href: undefined },
  { Icon: Clock, label: 'Response time', value: 'Usually within 24 hours', href: undefined },
];

const socials = [
  { Icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${site.whatsapp}` },
  { Icon: Instagram, label: 'Instagram', href: site.instagram },
  { Icon: Linkedin, label: 'LinkedIn', href: site.linkedin },
];

const callingCodes = [
  { country: 'India', code: '+91' },
  { country: 'United States', code: '+1' },
  { country: 'United Kingdom', code: '+44' },
  { country: 'Australia', code: '+61' },
  { country: 'Canada', code: '+1' },
  { country: 'United Arab Emirates', code: '+971' },
  { country: 'Singapore', code: '+65' },
  { country: 'New Zealand', code: '+64' },
  { country: 'Ireland', code: '+353' },
  { country: 'Germany', code: '+49' },
  { country: 'France', code: '+33' },
  { country: 'Italy', code: '+39' },
  { country: 'Spain', code: '+34' },
  { country: 'Netherlands', code: '+31' },
  { country: 'Switzerland', code: '+41' },
  { country: 'South Africa', code: '+27' },
  { country: 'Pakistan', code: '+92' },
  { country: 'Bangladesh', code: '+880' },
  { country: 'Sri Lanka', code: '+94' },
  { country: 'Nepal', code: '+977' },
  { country: 'Malaysia', code: '+60' },
  { country: 'Philippines', code: '+63' },
  { country: 'Japan', code: '+81' },
  { country: 'China', code: '+86' },
  { country: 'Brazil', code: '+55' },
];
const whatsappNumber = '916385617317';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '', email: '', country: 'India', phone: '', serviceArea: '', notes: '', consent: null,
  });
  const selectedPhoneCode = callingCodes.find(({ country }) => country === form.country)?.code ?? '+91';
  const phoneInputMaxLength = 32 - selectedPhoneCode.length - 1;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    if (form.consent !== true) {
      setError('Please confirm that you understand and consent before submitting.');
      setSubmitting(false);
      return;
    }

    const fullPhone = form.phone.trim() ? `${selectedPhoneCode} ${form.phone.trim()}` : null;

    let insertError;
    try {
      const { error: databaseError } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: fullPhone,
        service_area: form.serviceArea,
        message: form.notes.trim(),
        consent: form.consent,
      });
      insertError = databaseError;
    } catch (databaseError) {
      insertError = databaseError;
    }

    if (insertError) {
      console.error('Contact message could not be saved', insertError);
      setError('Your enquiry could not be saved on the website.');
    } else {
      setError('');
    }

    const body = [
      `Hello ${site.name}, I’d like to enquire about a session.`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${fullPhone || 'Not provided'}`,
      `Service area: ${form.serviceArea}`,
      '',
      'Notes:',
      form.notes,
    ].join('\n');

    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's take the first step"
        intro="Reaching out takes courage — and it is the hardest part. Whether you are ready to book or simply have a question, you will be met with warmth and without pressure."
      />

      <section className="container-well py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <h2 className="text-h3">Get in touch</h2>
              <p className="mt-3 text-ink-700">
                Choose whichever way feels easiest. You can send a message below, email directly, or
                book a free 15-minute consultation call.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4">
              {contactDetails.map((d, i) => (
                <Reveal key={d.label} delay={i * 70}>
                  <a
                    href={d.href ?? undefined}
                    className={`group flex items-start gap-4 rounded-4xl bg-cream-100 p-5 ring-1 ring-ink-900/[0.04] transition-all duration-300 ${
                      d.href ? 'hover:bg-cream-200 hover:shadow-soft' : 'cursor-default'
                    }`}
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
                      <d.Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-ink-700/60">{d.label}</span>
                      <span className="text-ink-900">{d.value}</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="rounded-4xl bg-sage-100 p-6">
                <p className="mb-4 text-sm font-medium text-sage-700">Prefer to message?</p>
                <div className="flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-4 py-2 text-sm text-ink-800 ring-1 ring-ink-900/10 transition-all hover:bg-cream-100 hover:shadow-soft"
                    >
                      <s.Icon className="h-4 w-4 text-sage-600" />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-5xl bg-cream-100 p-7 shadow-soft ring-1 ring-ink-900/[0.04] sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-200 text-sage-600">
                    <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-h3">Your WhatsApp message is ready</h3>
                  <p className="max-w-md text-ink-700">
                    WhatsApp should open with your message addressed to +91 6385617317. Review it and press Send in WhatsApp to complete your enquiry.
                  </p>
                  {error && (
                    <p role="alert" className="max-w-md rounded-2xl bg-rose-100 px-4 py-3 text-left text-sm text-rose-700">
                      {error} Your WhatsApp message is still ready to send, but the enquiry was not saved on the website.
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setError('');
                    }}
                    className="rounded-md text-sm font-medium text-sage-600 transition-colors hover:text-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h2 className="text-h3">Send a message</h2>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field id="contact-name" label="Your name" required>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        maxLength={120}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="input-field"
                      />
                    </Field>
                    <Field id="contact-email" label="Email" required>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        maxLength={320}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="input-field"
                      />
                    </Field>
                  </div>

                  <Field label="Phone number (optional)">
                    <div className="grid gap-3 sm:grid-cols-[minmax(10rem,0.8fr)_1.2fr]">
                      <select
                        aria-label="Phone country code"
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        className="input-field"
                      >
                        {callingCodes.map(({ country, code }) => (
                          <option key={country} value={country}>{country} ({code})</option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        autoComplete="tel-national"
                        inputMode="tel"
                        aria-label="Phone number"
                        maxLength={phoneInputMaxLength}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Phone number"
                        className="input-field"
                      />
                    </div>
                  </Field>

                  <Field id="contact-service-area" label="Service area" required>
                    <select
                      id="contact-service-area"
                      required
                      value={form.serviceArea}
                      onChange={(e) => setForm({ ...form, serviceArea: e.target.value })}
                      className="input-field"
                    >
                      <option value="" disabled>Select a service area</option>
                      {services.map(({ slug, title }) => (
                        <option key={slug} value={title}>{title}</option>
                      ))}
                    </select>
                  </Field>

                  <Field id="contact-notes" label="Notes" required>
                    <textarea
                      id="contact-notes"
                      required
                      maxLength={5000}
                      rows={5}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Share as much or as little as you feel comfortable with..."
                      className="input-field resize-none"
                    />
                  </Field>

                  <fieldset className="flex flex-col gap-3 text-sm text-ink-700">
                    <legend className="mb-1 font-medium text-ink-800">
                      Please confirm your understanding <span className="text-rose-400">*</span>
                    </legend>
                    <p>
                      This form is for enquiries only; therapy is not provided through it. I agree to be contacted about my enquiry via WhatsApp.
                    </p>
                    {[['yes', true, 'I understand and consent'], ['no', false, 'I do not consent']].map(([value, consent, label]) => (
                      <label key={value} className="inline-flex items-center gap-3">
                        <input
                          type="radio"
                          name="consent"
                          required
                          value={value}
                          checked={form.consent === consent}
                          onChange={() => setForm({ ...form, consent })}
                          className="h-4 w-4 border-ink-900/20 text-sage-500 focus:ring-sage-400"
                        />
                        {label}
                      </label>
                    ))}
                  </fieldset>

                  {error && (
                    <p role="alert" className="rounded-2xl bg-rose-100 px-4 py-3 text-sm text-rose-700">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-500 px-7 py-4 text-sm font-medium text-cream-50 shadow-soft transition-all duration-300 hover:bg-sage-600 hover:shadow-soft-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    {submitting ? 'Sending…' : 'Send message'}
                  </button>

                  <p className="text-center text-xs text-ink-700/60">
                    Continuing to WhatsApp shares your prefilled message details with WhatsApp; the practice receives them only if you press Send. Review the message before sending. See our{' '}
                    <Link to="/privacy-policy" className="underline underline-offset-2 transition-colors hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400">Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .input-field {
          width: 100%;
          border-radius: 1rem;
          background-color: #fffdf8;
          padding: 0.875rem 1.125rem;
          font-size: 0.9375rem;
          color: #2b2926;
          ring: 1px solid rgba(29,28,26,0.1);
          box-shadow: inset 0 0 0 1px rgba(29,28,26,0.08);
          transition: box-shadow 0.2s, background-color 0.2s;
        }
        .input-field::placeholder { color: rgba(61,58,54,0.4); }
        .input-field:focus {
          outline: none;
          box-shadow: inset 0 0 0 2px #8a9d83;
          background-color: #fffdf8;
        }
      `}</style>
    </>
  );
}

function Field({ id, label, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      {id ? (
        <label htmlFor={id} className="text-sm font-medium text-ink-800">
          {label} {required && <span className="text-rose-400">*</span>}
        </label>
      ) : (
        <span className="text-sm font-medium text-ink-800">
          {label} {required && <span className="text-rose-400">*</span>}
        </span>
      )}
      {children}
    </div>
  );
}
