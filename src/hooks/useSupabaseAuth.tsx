import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function useSupabaseAuth() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setLoading(false)
    }).catch((e) => {
      console.warn('Failed to get session:', e)
      setLoading(false)
    })

    try {
      const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      })
      return () => listener?.subscription.unsubscribe()
    } catch (e) {
      console.warn('Auth state listener failed:', e)
    }
  }, [])

  return { user, loading }
}
