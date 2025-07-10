/*
  # Create brandforce_contact table

  1. New Tables
    - `brandforce_contact`
      - `id` (bigint, primary key, auto-increment)
      - `name` (text, required)
      - `email` (text, required)
      - `website` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamp with time zone, default now())

  2. Security
    - Enable RLS on `brandforce_contact` table
    - Add policy for authenticated users to insert their own data
*/

CREATE TABLE IF NOT EXISTS public.brandforce_contact (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  website text,
  message text NOT NULL,
  CONSTRAINT brandforce_contact_pkey PRIMARY KEY (id)
);

ALTER TABLE public.brandforce_contact ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions
CREATE POLICY "Anyone can insert contact submissions"
  ON public.brandforce_contact
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read all contact submissions (for admin purposes)
CREATE POLICY "Authenticated users can read contact submissions"
  ON public.brandforce_contact
  FOR SELECT
  TO authenticated
  USING (true);