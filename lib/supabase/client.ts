import { createBrowserClient } from '@supabase/ssr'

const SUPABASE_URL = 'https://zyzntmcgrdsrhipkxmvu.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5em50bWNncmRzcmhpcGt4bXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNTA2NTcsImV4cCI6MjA5MDgyNjY1N30.e6BYzgZ0zGKh4C3FcAKf7m2pE1bH-jhq0Bwv077B_OE'

export function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}
