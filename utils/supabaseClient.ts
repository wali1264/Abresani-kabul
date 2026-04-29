
import { createClient } from '@supabase/supabase-js';

// این مقادیر مستقیماً بر اساس اطلاعات ارسالی شما تنظیم شده است
const supabaseUrl = 'https://vwylnmazehtvhmwrwnst.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3eWxubWF6ZWh0dmhtd3J3bnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0Mzk0NTksImV4cCI6MjA5MzAxNTQ1OX0.P-AboICrtxrvGkZbBhKNjKujDqYUmNb6GH1UHzvKZDA';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and anon key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
