-- Remove web contact enquiries after the owner-approved 90-day retention period.
CREATE EXTENSION IF NOT EXISTS pg_cron;

SELECT cron.schedule(
  'delete-expired-contact-messages',
  '0 * * * *',
  $$
    DELETE FROM public.contact_messages
    WHERE created_at < now() - interval '90 days';
  $$
);
