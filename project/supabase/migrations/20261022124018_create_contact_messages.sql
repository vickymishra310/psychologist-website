/*
# Create contact message storage

1. New Tables
- `contact_messages`
- `id`: unique message identifier.
- `name`: visitor's name.
- `email`: visitor's reply email.
- `session_type`: selected enquiry type.
- `message`: visitor's enquiry text.
- `consent`: records that the visitor agreed to be contacted.
- `created_at`: server-created submission timestamp.

2. Security
- Enable row-level security on `contact_messages`.
- Allow anonymous and signed-in visitors to insert enquiry fields only.
- Do not grant read, update, or delete access through the browser.
- Keep the server-created identifier and timestamp outside the insert grant.

3. Important Notes
- This is a single-tenant contact form with no sign-in requirement.
- Submitted enquiries are available to trusted server-side project tooling, not to public browser reads.
*/

CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 320),
  session_type text NOT NULL CHECK (char_length(session_type) BETWEEN 1 AND 120),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 5000),
  consent boolean NOT NULL CHECK (consent = true),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.contact_messages FROM anon, authenticated;
GRANT INSERT (name, email, session_type, message, consent) ON TABLE public.contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "Public can submit contact messages" ON public.contact_messages;
CREATE POLICY "Public can submit contact messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (consent = true);
