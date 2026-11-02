import LegalPage from '@/pages/LegalPage';
import { site } from '@/data/site';

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      eyebrow="Legal"
      updated="9 August 2026"
      intro="These terms outline the agreement between us regarding the use of this website and the psychological services I provide."
      sections={[
        {
          heading: 'Use of this website',
          body: (
            <>
              <p>
                This website is provided for informational and educational purposes only. By accessing
                it, you agree to use it lawfully and not to misuse any content. Content may not be
                reproduced without permission.
              </p>
              <p>
                The blog and other materials are not a substitute for professional therapy and should
                not be relied upon as such.
              </p>
            </>
          ),
        },
        {
          heading: 'Therapeutic services',
          body: (
            <>
              <p>Engaging in therapy constitutes an agreement to the following:</p>
              <ul>
                <li>Sessions are 50 minutes for individuals and 60 minutes for couples, unless agreed otherwise.</li>
                <li>Sessions are typically held weekly, at an agreed time.</li>
                <li>Both in-person and online sessions are offered, subject to availability and suitability.</li>
                <li>Therapy is a collaborative process and outcomes cannot be guaranteed.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Fees',
          body: (
            <>
              <p>
                Individual sessions are £120 and couples sessions are £150, payable by bank transfer
                before or on the day of the session. A limited number of reduced-fee slots are available
                — please enquire if this would be helpful.
              </p>
            </>
          ),
        },
        {
          heading: 'Cancellations and rescheduling',
          body: (
            <p>
              Sessions can be rescheduled with at least 48 hours notice at no charge. Cancellations made
              within 48 hours of the appointment, or missed sessions, are charged at the full session
              fee. This protects time that cannot easily be offered to someone else.
            </p>
          ),
        },
        {
          heading: 'Confidentiality',
          body: (
            <p>
              All sessions are confidential within the limits described in the Privacy Policy and
              professional guidelines. This will be discussed in full during our first session.
            </p>
          ),
        },
        {
          heading: 'Professional conduct',
          body: (
            <p>
              I adhere to the ethical frameworks of the BACP and HCPC. If you ever have a concern about
              our work together, I encourage you to raise it with me directly in the first instance. You
              also have the right to make a formal complaint to the relevant professional body.
            </p>
          ),
        },
        {
          heading: 'Changes to these terms',
          body: (
            <p>
              These terms may be updated from time to time. The most current version will always be
              available on this page, with the updated date shown above.
            </p>
          ),
        },
        {
          heading: 'Contact',
          body: (
            <p>
              For any questions about these terms, please contact me at{' '}
              <a href={`mailto:${site.email}`} className="link-quiet">{site.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
