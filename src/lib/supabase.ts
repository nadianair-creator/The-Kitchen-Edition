import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL || ''
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

let supabase: any = null

try {
  if (url && anon) {
    supabase = createClient(url, anon)
  } else {
    console.warn('Supabase config incomplete — skipping init')
  }
} catch (e) {
  console.warn('Supabase init failed:', e)
}

export { supabase }
