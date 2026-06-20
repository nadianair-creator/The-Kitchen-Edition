import { loadStripe } from '@stripe/stripe-js'

export async function startCheckout(priceId: string){
  const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
  // Forward to backend to create a Checkout Session; backend returns sessionId or url.
  const res = await fetch('/api/create-checkout-session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ priceId }) })
  const { url } = await res.json()
  window.location.href = url
}

export async function openBillingPortal(){
  const res = await fetch('/api/create-portal-session', { method: 'POST' })
  const { url } = await res.json()
  window.location.href = url
}
