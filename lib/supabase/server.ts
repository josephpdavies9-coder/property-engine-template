import { createServerClient, type CookieMethodsServer } from '@supabase/ssr'
import { cookies } from 'next/headers'

const SUPABASE_URL = 'https://zyzntmcgrdsrhipkxmvu.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5em50bWNncmRzcmhpcGt4bXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNTA2NTcsImV4cCI6MjA5MDgyNjY1N30.e6BYzgZ0zGKh4C3FcAKf7m2pE1bH-jhq0Bwv077B_OE'

type CookieStore = Awaited<ReturnType<typeof cookies>>

function buildCookieMethods(cookieStore: CookieStore): CookieMethodsServer {
  return {
    getAll() {
      return cookieStore.getAll()
    },
    setAll(cookiesToSet) {
      try {
        cookiesToSet.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options)
        )
      } catch {
        // Called from a Server Component — cookies cannot be set.
        // The middleware handles session refresh.
      }
    },
  }
}

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    { cookies: buildCookieMethods(cookieStore) }
  )
}
