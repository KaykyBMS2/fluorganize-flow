// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jxvudtnjjnsrdexwwpqs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4dnVkdG5qam5zcmRleHd3cHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMzE4MjYsImV4cCI6MjA1MzYwNzgyNn0.wg6cff21jvmgQMeVp7rgHt0OuWOESDhQL0k6zH5M6WQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);