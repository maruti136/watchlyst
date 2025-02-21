import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ftzecdrudoxvsowbazej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0emVjZHJ1ZG94dnNvd2JhemVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2Njg4NzYsImV4cCI6MjA1NDI0NDg3Nn0.SQYbd366_Ad2jLx-irPaEZT2KyTJIFc6ISK9_Tgc0WM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
