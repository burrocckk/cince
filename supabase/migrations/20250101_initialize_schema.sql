/*
  # OnlyChinese: Initial Schema Setup

  This migration establishes the core tables for the OnlyChinese platform.

  ## New Tables:
  1. `categories`: Stores book categories, including special HSK levels with their corresponding colors.
  2. `books`: Stores all book information, linking to categories, authors, and storing metadata. It includes a `is_published` flag for the admin approval flow.

  ## Security:
  - Row Level Security (RLS) is enabled on both tables.
  - Public read access is granted for all categories.
  - Public read access is granted for books that are marked as `is_published`.
*/

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL UNIQUE,
    slug text NOT NULL UNIQUE,
    is_hsk_level boolean NOT NULL DEFAULT false,
    hsk_level smallint,
    color_hex text,
    created_at timestamptz NOT NULL DEFAULT now()
);
COMMENT ON TABLE public.categories IS 'Stores book categories, including HSK levels.';

-- 2. Books Table
CREATE TABLE IF NOT EXISTS public.books (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    author text,
    description text,
    what_to_learn text,
    cover_image_url text,
    pdf_file_url text,
    pdf_file_size_kb integer,
    category_id uuid REFERENCES public.categories(id),
    hsk_level_id uuid REFERENCES public.categories(id),
    is_published boolean NOT NULL DEFAULT false,
    submitted_by uuid REFERENCES auth.users(id),
    view_count integer NOT NULL DEFAULT 0,
    created_at timestamptz NOT NULL DEFAULT now(),
    published_at timestamptz
);
COMMENT ON TABLE public.books IS 'Contains all the details for the shared books.';

-- 3. Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies
CREATE POLICY "Allow public read access to all categories"
ON public.categories
FOR SELECT USING (true);

CREATE POLICY "Allow public read access to published books"
ON public.books
FOR SELECT USING (is_published = true);

CREATE POLICY "Allow authenticated users to insert books"
ON public.books
FOR INSERT TO authenticated WITH CHECK (auth.uid() = submitted_by);

-- 5. Seed initial categories
-- Using a DO block to handle potential unique constraint violations gracefully
DO $$
BEGIN
  -- Standard Categories
  INSERT INTO public.categories (name, slug) VALUES
    ('Business Chinese', 'business-chinese'),
    ('Daily Chinese', 'daily-chinese'),
    ('Story Books', 'story-books'),
    ('History', 'history'),
    ('Literature', 'literature'),
    ('Translations', 'translations')
  ON CONFLICT (slug) DO NOTHING;

  -- HSK Categories with color gradient from green to red
  INSERT INTO public.categories (name, slug, is_hsk_level, hsk_level, color_hex) VALUES
    ('HSK 1', 'hsk-1', true, 1, '#4ade80'), -- Green 400
    ('HSK 2', 'hsk-2', true, 2, '#a3e635'), -- Lime 400
    ('HSK 3', 'hsk-3', true, 3, '#facc15'), -- Yellow 400
    ('HSK 4', 'hsk-4', true, 4, '#fb923c'), -- Orange 400
    ('HSK 5', 'hsk-5', true, 5, '#f87171'), -- Red 400
    ('HSK 6', 'hsk-6', true, 6, '#ef4444')  -- Red 500
  ON CONFLICT (slug) DO NOTHING;
END $$;