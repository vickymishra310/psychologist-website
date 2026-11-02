-- Store the optional international phone number and the visitor's selected service area.
ALTER TABLE public.contact_messages
  RENAME COLUMN session_type TO service_area;

ALTER TABLE public.contact_messages
  ADD COLUMN phone text CHECK (phone IS NULL OR char_length(phone) BETWEEN 3 AND 32);

-- Refresh column-level permissions so public visitors can submit the new phone field,
-- while preserving insert-only access and the existing consent policy.
REVOKE INSERT ON TABLE public.contact_messages FROM anon, authenticated;
GRANT INSERT (name, email, phone, service_area, message, consent)
  ON TABLE public.contact_messages TO anon, authenticated;

COMMENT ON COLUMN public.contact_messages.phone IS
  'Optional phone number submitted with its selected international calling code.';
COMMENT ON COLUMN public.contact_messages.service_area IS
  'One service area selected from the public contact form.';
