'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Demo mode: login is disabled. Middleware redirects /login → / but
// this page acts as a fallback in case the redirect is bypassed.
export default function LoginPage() {
  const router = useRouter()
  useEffect(() => { router.replace('/') }, [router])
  return null
}
