export default function About() {
  return (
    <div className="py-8 max-w-3xl">
      <div className="eyebrow">Our Story</div>
      <h1 className="font-serif text-4xl mt-2 mb-6">About The Kitchen Edition</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-gray-700">
        <p>
          <strong>The Kitchen Edition</strong> is an editorial approach to meal planning—thoughtful, curated, and free from the noise of endless recipe algorithms.
        </p>

        <h2 className="font-serif text-2xl mt-8 mb-4 text-gray-900">Our Philosophy</h2>
        <p>
          We believe cooking should be calm, intentional, and accessible. Too many meal planning apps overwhelm with options. We strip away the noise and focus on what matters: discovering recipes you'll love, planning your week with clarity, and shopping smarter.
        </p>

        <h2 className="font-serif text-2xl mt-8 mb-4 text-gray-900">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Curated recipe discovery powered by Spoonacular API</li>
          <li>A simple, visual weekly meal planner</li>
          <li>Auto-generated shopping lists from your plan</li>
          <li>Personal favorites collection</li>
          <li>No ads, no algorithmic manipulation</li>
        </ul>

        <h2 className="font-serif text-2xl mt-8 mb-4 text-gray-900">Built with Care</h2>
        <p>
          The Kitchen Edition is built using modern, open technologies. We respect your privacy—all your meal plans and favorites are stored locally on your device. No tracking, no selling your data.
        </p>

        <h2 className="font-serif text-2xl mt-8 mb-4 text-gray-900">Questions?</h2>
        <p>
          We'd love to hear from you. This is still early in our journey, and we're constantly improving based on feedback.
        </p>
      </div>
    </div>
  )
}
