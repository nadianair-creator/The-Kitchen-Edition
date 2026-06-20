import { supabase } from './supabase'

export async function fetchSubscription(userId: string) {
  if (!userId || !supabase) return null
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error) {
      console.warn('fetchSubscription error', error)
      return null
    }
    return data
  } catch (e) {
    console.warn('fetchSubscription failed:', e)
    return null
  }
}
