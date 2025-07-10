// Environment configuration for Supabase
export const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL || 'https://fhryomltqzvrxwpaiygr.supabase.co',
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZocnlvbWx0cXp2cnh3cGFpeWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MjY1NTIsImV4cCI6MjA2NzMwMjU1Mn0.snUXIqfkSOIFlaKmyqJM2bl55w3Et1cOP1c-jHVCMjo'
} as const;

// Validate environment variables
if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) {
  console.warn('Supabase configuration missing. Please check environment variables.');
}