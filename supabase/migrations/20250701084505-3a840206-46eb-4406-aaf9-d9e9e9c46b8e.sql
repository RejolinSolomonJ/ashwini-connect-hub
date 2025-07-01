
-- Create storage bucket for resume uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', false);

-- Create RLS policies for resume bucket
CREATE POLICY "Staff can upload their own resumes" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Staff can view their own resumes" ON storage.objects
FOR SELECT USING (bucket_id = 'resumes');

-- Update staff table to include resume_url
ALTER TABLE public.staff ADD COLUMN resume_url TEXT;

-- Update students table to include mode (online/offline) and school_name
ALTER TABLE public.students ADD COLUMN mode TEXT NOT NULL DEFAULT 'offline';
ALTER TABLE public.students ADD COLUMN school_name TEXT NOT NULL DEFAULT '';
