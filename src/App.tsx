import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <header className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-300">
        <h1 className="font-serif text-4xl">The Kitchen Edition</h1>
        <p className="text-sm text-gray-600 mt-2">Editorial meal planning — coming soon</p>
      </header>
      
      <nav className="bg-gray-50 border-b border-gray-300">
        <div className="max-w-4xl mx-auto px-6 py-4 flex gap-4">
          <Link to="/" className="underline">Home</Link>
          <Link to="/about" className="underline">About</Link>
          <Link to="/pricing" className="underline">Pricing</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={
            <div>
              <h2 className="font-serif text-3xl mb-4">Welcome to The Kitchen Edition</h2>
              <p className="text-gray-700 mb-4">An editorial, calm approach to meal planning.</p>
              <div className="bg-white border border-gray-200 p-6 rounded">
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Browse curated recipes</li>
                  <li>Plan your weekly meals</li>
                  <li>Generate shopping lists</li>
                  <li>AI-powered meal suggestions (Premium)</li>
                </ul>
              </div>
            </div>
          } />
          <Route path="/about" element={
            <div>
              <h2 className="font-serif text-3xl mb-4">About The Kitchen Edition</h2>
              <p className="text-gray-700">A mindful approach to meal planning.</p>
            </div>
          } />
          <Route path="/pricing" element={
            <div>
              <h2 className="font-serif text-3xl mb-4">Pricing Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 p-6 rounded">
                  <h3 className="font-semibold text-lg">Free</h3>
                  <p className="text-gray-600 text-sm">$0/month</p>
                  <ul className="mt-4 text-sm text-gray-600 space-y-1">
                    <li>✓ Recipe discovery</li>
                    <li>✓ 10 saved favorites</li>
                  </ul>
                </div>
                <div className="border border-gray-200 p-6 rounded bg-gray-50">
                  <h3 className="font-semibold text-lg">Pro</h3>
                  <p className="text-gray-600 text-sm">$3.99/month</p>
                  <ul className="mt-4 text-sm text-gray-600 space-y-1">
                    <li>✓ Everything in Free</li>
                    <li>✓ Weekly meal planner</li>
                    <li>✓ Shopping lists</li>
                  </ul>
                </div>
                <div className="border border-gray-200 p-6 rounded">
                  <h3 className="font-semibold text-lg">Ultra</h3>
                  <p className="text-gray-600 text-sm">$7.99/month</p>
                  <ul className="mt-4 text-sm text-gray-600 space-y-1">
                    <li>✓ Everything in Pro</li>
                    <li>✓ AI meal planner</li>
                    <li>✓ Household sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </main>
    </div>
  )
}
