type Plan = 'free'|'pro'|'ultra'

const TIER_RANK: Record<Plan, number> = { free: 0, pro: 1, ultra: 2 }

export function hasAccess(userPlan: Plan, requiredPlan: Plan){
  return TIER_RANK[userPlan] >= TIER_RANK[requiredPlan]
}
