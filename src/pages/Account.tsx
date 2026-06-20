import React, { useEffect, useState } from 'react'
import { useSupabaseAuth } from '../hooks/useSupabaseAuth'
import { fetchSubscription } from '../lib/subscriptions'
import { openBillingPortal } from '../lib/stripe'

export default function Account(){
  const { user, loading } = useSupabaseAuth()
  const [subscription, setSubscription] = useState<any>(null)

  useEffect(() => {
    if (!loading && user?.id) {
      fetchSubscription(user.id).then(setSubscription)
    }
  }, [loading, user])

  return (
    <section className="py-8">
      <div className="eyebrow">Account</div>
      <h1 className="font-serif text-3xl mt-2 mb-4">Account</h1>
      <div className="border border-gray-200 bg-white p-6">
        {loading ? (
          <div>Loading...</div>
        ) : user ? (
          <div>
            <div className="text-sm text-gray-600 mb-2">Signed in as {user.email}</div>
            <div className="mb-4">
              <div className="font-semibold">Membership</div>
              <div>{subscription?.plan ?? 'free'}</div>
              {subscription?.status === 'trialing' && (
                <div className="text-sm text-gray-600">Trial ends at: {subscription.trial_ends_at}</div>
              )}
            </div>
            <div>
              <button onClick={() => openBillingPortal()} className="px-4 py-2 border rounded">Manage membership</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">You are not signed in.</div>
            <a href="/auth" className="underline">Sign in</a>
          </div>
        )}
      </div>
    </section>
  )
}
