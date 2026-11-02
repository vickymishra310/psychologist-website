import LegalPage from '@/pages/LegalPage';
import { site } from '@/data/site';

export default function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      eyebrow="Legal"
      updated="9 August 2026"
      intro="This policy explains how cookies and similar technologies are used on this website, and how you can control them."
      sections={[
        {
          heading: 'What are cookies?',
          body: (
            <p>
              Cookies are small text files placed on your device when you visit a website. They allow
              the site to remember your actions and preferences over time. This website uses cookies
              sparingly and only where they improve your experience.
            </p>
          ),
        },
        {
          heading: 'Cookies I use',
          body: (
            <>
              <p>The cookies on this website fall into the following categories:</p>
              <ul>
                <li><strong>Essential cookies</strong> — required for the website to function correctly, such as remembering your cookie preferences. These cannot be disabled.</li>
                <li><strong>Analytics cookies</strong> — anonymised data about how the site is used, helping me understand which content is helpful and improve the site over time.</li>
              </ul>
              <p>This website does not use advertising or third-party tracking cookies.</p>
            </>
          ),
        },
        {
          heading: 'Managing cookies',
          body: (
            <>
              <p>
                You can control or delete cookies through your browser settings. Most browsers allow
                you to refuse cookies or alert you when cookies are being sent. Please note that if you
                disable essential cookies, some parts of the website may not function as intended.
              </p>
              <p>
                For guidance on managing cookies in your browser, visit the help section of your browser
                or visit <a href="https://www.aboutcookies.org" className="link-quiet" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.
              </p>
            </>
          ),
        },
        {
          heading: 'Analytics',
          body: (
            <p>
              Any analytics used on this site are privacy-respecting and do not identify individual
              visitors. Data is aggregated and used solely to understand site usage and improve content.
            </p>
          ),
        },
        {
          heading: 'Changes to this policy',
          body: (
            <p>
              This Cookie Policy may be updated from time to time. The current version will always be
              available on this page with the updated date shown above.
            </p>
          ),
        },
        {
          heading: 'Contact',
          body: (
            <p>
              For any questions about cookies on this site, please contact me at{' '}
              <a href={`mailto:${site.email}`} className="link-quiet">{site.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
