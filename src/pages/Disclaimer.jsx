import LegalPage from '@/pages/LegalPage';

export default function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      eyebrow="Legal"
      updated="9 August 2026"
      intro="Please read this disclaimer carefully. It clarifies the nature of the information provided on this website and the limits of the services offered."
      sections={[
        {
          heading: 'Educational content only',
          body: (
            <p>
              All content on this website — including blog articles, descriptions of services, and any
              other written material — is provided for general informational and educational purposes
              only. It is not intended to constitute professional advice, diagnosis, or treatment, and
              should not be relied upon as such.
            </p>
          ),
        },
        {
          heading: 'Not a substitute for therapy',
          body: (
            <p>
              Reading content on this website does not establish a therapeutic relationship. Nothing
              here replaces a personal consultation with a qualified mental health professional. If you
              are considering therapy, please book a session or initial consultation.
            </p>
          ),
        },
        {
          heading: 'No medical advice',
          body: (
            <p>
              I am a psychologist, not a medical doctor, and I do not prescribe medication. Any
              references to conditions, symptoms, or treatments are for educational purposes. Decisions
              about your mental health should be made in consultation with an appropriate qualified
              professional who knows your individual circumstances.
            </p>
          ),
        },
        {
          heading: 'Emergency situations',
          body: (
            <>
              <p>
                This website is not monitored for emergencies and is not a crisis service. If you are
                in immediate danger in India, call 112 or go to the nearest hospital emergency
                department. For mental health support in India, call Tele-MANAS.
              </p>
              <ul>
                <li>
                  <strong>Emergency services:</strong> <a href="tel:112">112</a> (pan-India emergency
                  response for police, fire, health, and other emergencies;{' '}
                  <a href="https://112.gov.in/" target="_blank" rel="noreferrer">official website</a>)
                </li>
                <li>
                  <strong>Tele-MANAS:</strong> <a href="tel:14416">14416</a> or{' '}
                  <a href="tel:18008914416">1-800-89-14416</a> (24/7 mental health support;{' '}
                  <a href="https://telemanas.mohfw.gov.in/" target="_blank" rel="noreferrer">official website</a>)
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: 'External links',
          body: (
            <p>
              This website may link to external resources for reference. I am not responsible for the
              content or accuracy of external sites, and linking to them does not constitute endorsement.
            </p>
          ),
        },
        {
          heading: 'No guarantees',
          body: (
            <p>
              Therapy is a collaborative and individual process. While many people benefit
              significantly, no specific outcome can be guaranteed. Results vary from person to person
              and depend on many factors unique to each individual.
            </p>
          ),
        },
      ]}
    />
  );
}
