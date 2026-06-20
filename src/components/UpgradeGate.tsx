import React from 'react'
import { hasAccess } from '../lib/access'

export default function UpgradeGate({ requiredPlan, children }: { requiredPlan: 'pro'|'ultra'|'free', children: React.ReactNode }){
  // TODO: replace with real subscription from Supabase
  const userPlan: 'free'|'pro'|'ultra' = 'free'
  if (hasAccess(userPlan, requiredPlan)) return <>{children}</>
  return (
    <div className="border border-gray-200 bg-white p-6">
      <div className="eyebrow">Membership Required</div>
      <h2 className="font-serif text-2xl mt-2">Upgrade to {requiredPlan.toUpperCase()}</h2>
      <p className="mt-4 text-sm text-gray-700">This feature requires a {requiredPlan} membership. Start a 30-day free trial from the Pricing page.</p>
      <div className="mt-4">
        <a href="/pricing" className="underline">See pricing</a>
      </div>
    </div>
  )
}
