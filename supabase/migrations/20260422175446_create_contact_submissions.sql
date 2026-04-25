/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text, not null) - sender's name
      - `email` (text, not null) - sender's email
      - `message` (text, not null) - message body
      - `created_at` (timestamptz, default now()) - submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add INSERT policy for anonymous users (public contact form)
    - No SELECT/UPDATE/DELETE policies for public access — admin only
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    char_length(name) > 0
    AND char_length(email) > 0
    AND char_length(message) > 0
  );
