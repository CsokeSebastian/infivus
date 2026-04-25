/*
  # Create client requests table

  1. New Tables
    - `client_requests`
      - `id` (uuid, primary key) - unique identifier for each request
      - `full_name` (text, not null) - client's full name
      - `email` (text, not null) - client's email address
      - `business_name` (text, not null, default '') - client's business name
      - `request` (text, not null) - description of what the client wants worked on
      - `links` (text, not null, default '') - reference links provided by the client
      - `created_at` (timestamptz, default now()) - submission timestamp

  2. Security
    - Enable RLS on `client_requests` table
    - Add INSERT policy for anonymous users (public form submissions)
    - No SELECT/UPDATE/DELETE policies (data only accessible via Supabase dashboard)
*/

CREATE TABLE IF NOT EXISTS client_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  business_name text NOT NULL DEFAULT '',
  request text NOT NULL,
  links text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE client_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a request"
  ON client_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    length(trim(full_name)) > 0
    AND length(trim(email)) > 0
    AND length(trim(request)) > 0
  );
