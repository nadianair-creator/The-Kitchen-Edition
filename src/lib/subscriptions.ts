import { supabase } from './supabase'

export async function fetchSubscription(userId: string) {
  if (!userId) return null
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
}
