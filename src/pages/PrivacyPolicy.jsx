import LegalPage from '@/pages/LegalPage';
import { site } from '@/data/site';

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      eyebrow="Legal"
      updated="9 August 2026"
      intro="Your privacy and the confidentiality of what you share are foundational to therapy. This policy explains what information I hold, why, and how it is protected."
      sections={[
        {
          heading: 'Overview',
          body: (
            <p>
              This Privacy Policy describes how {site.name} collects, uses, and protects personal
              information in connection with psychological services provided through this website and in
              practice. By using this website or contacting me, you consent to the practices described here.
            </p>
          ),
        },
        {
          heading: 'Information I collect',
          body: (
            <>
              <p>I may collect the following types of information:</p>
              <ul>
                <li><strong>Contact details</strong> — such as your name, email address, and phone number, when you submit a form or get in touch.</li>
                <li><strong>Enquiry details</strong> — the service area you select and any notes you choose to include in your message.</li>
                <li><strong>Session records</strong> — for active clients, clinical notes are kept securely and separately, in line with professional and legal requirements.</li>
                <li><strong>Website usage data</strong> — anonymised analytics such as pages visited, used to improve the website. See the Cookie Policy for details.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'How I use your information',
          body: (
            <>
              <p>Your information is used solely to:</p>
              <ul>
                <li>Respond to your enquiry and arrange sessions</li>
                <li>Provide safe, effective psychological care</li>
                <li>Fulfil professional, legal, and ethical obligations</li>
                <li>Improve the website and its content</li>
              </ul>
              <p>I will never sell your data, and I will never use it for marketing without your explicit consent.</p>
            </>
          ),
        },
        {
          heading: 'Confidentiality in therapy',
          body: (
            <>
              <p>
                Everything you share in therapy is held in strict confidence. The only exceptions are
                rare legal and ethical obligations relating to risk of serious harm to yourself or
                others, or where compelled by a court of law. In such circumstances, I would always aim
                to discuss this with you first.
              </p>
              <p>Clinical notes are stored securely and separately from contact records, in accordance with BACP and HCPC guidelines.</p>
            </>
          ),
        },
        {
          heading: 'Data sharing',
          body: (
            <p>
              Contact form submissions are stored in Supabase, the database service used by this
              website, so I can review and respond to enquiries. When you continue from the form to
              WhatsApp, the prefilled message details are sent to WhatsApp to prepare the draft; they
              are delivered to the practice only if you press Send in WhatsApp. WhatsApp handles that
              information under its own privacy practices. I do not send the WhatsApp message on your
              behalf. I do not share your personal information with other third parties except where
              necessary to provide care (for example, with your GP and only with your consent) or where
              required by law.
            </p>
          ),
        },
        {
          heading: 'Data retention',
          body: (
            <p>
              Contact enquiries are stored in the website database for up to 90 days after submission
              and then removed by a scheduled database cleanup. If you send the prefilled message using
              WhatsApp, WhatsApp may retain or process its copy under its own policies; I do not control
              WhatsApp's retention. Clinical records for active and former clients are retained in
              accordance with professional body requirements — typically for a defined period after
              our final session — and then securely destroyed.
            </p>
          ),
        },
        {
          heading: 'Your rights',
          body: (
            <>
              <p>Under the UK GDPR and Data Protection Act 2018, you have the right to:</p>
              <ul>
                <li>Access the personal data I hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of data (subject to professional retention obligations)</li>
                <li>Withdraw consent at any time where processing is based on consent</li>
                <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Security',
          body: (
            <p>
              Appropriate technical and organisational measures are in place to protect your data,
              including secure storage, encryption where applicable, and restricted access. No method of
              transmission or storage is completely secure, but I take every reasonable step to
              safeguard your information.
            </p>
          ),
        },
      ]}
    />
  );
}
