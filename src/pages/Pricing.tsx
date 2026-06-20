import { Check } from 'lucide-react'

export default function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      desc: 'Perfect for getting started',
      features: [
        'Browse all recipes',
        'Search by diet & ingredients',
        'Save up to 10 favorites',
        'Basic meal planner',
      ],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$3.99',
      period: '/month',
      desc: 'For the serious home cook',
      features: [
        'Everything in Free, plus:',
        'Unlimited saved favorites',
        'Full weekly meal planner',
        'Auto-generated shopping lists',
        'Print-friendly lists',
        'Pantry management',
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Ultra',
      price: '$7.99',
      period: '/month',
      desc: 'For food enthusiasts',
      features: [
        'Everything in Pro, plus:',
        'AI meal plan suggestions',
        'Recipe scaling calculator',
        'Nutrition tracking',
        'Household sharing (3 members)',
        'Email recipe recommendations',
      ],
      cta: 'Start Free Trial',
      highlight: false,
    },
  ]

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="eyebrow">Plans</div>
          <h1 className="font-serif text-5xl mt-2 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your kitchen. Always cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg border-2 p-8 flex flex-col ${
                tier.highlight
                  ? 'border-amber-600 bg-amber-50 relative'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h2 className="font-serif text-2xl mb-2">{tier.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{tier.desc}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.period && <span className="text-gray-600">{tier.period}</span>}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  tier.highlight
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {tier.cta}
              </button>

              <ul className="space-y-3 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0 text-green-600 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl mb-4">Questions about plans?</h3>
          <p className="text-gray-600 mb-4">
            All tiers get a 14-day free trial. No credit card required. Cancel anytime.
          </p>
          <p className="text-sm text-gray-500">
            Billing happens monthly. We also offer annual plans with 20% discount.
          </p>
        </div>
      </div>
    </div>
  )
}
