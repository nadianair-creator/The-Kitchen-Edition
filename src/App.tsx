import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Discover from './pages/Discover'
import Planner from './pages/Planner'
import Prep from './pages/Prep'
import Grocery from './pages/Grocery'
import Pantry from './pages/Pantry'
import Favorites from './pages/Favorites'
import EatOut from './pages/EatOut'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Account from './pages/Account'
import Auth from './pages/Auth'
import AiPlanner from './pages/AiPlanner'
import AiAssistant from './pages/AiAssistant'
import UpgradeGate from './components/UpgradeGate'

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-paper text-ink font-sans">
          <header className="max-w-4xl mx-auto px-6 py-8">
            <Link to="/" className="font-serif text-3xl">The Kitchen Edition</Link>
          </header>
          <main className="max-w-4xl mx-auto px-6">
            <div className="p-6 bg-red-50 border border-red-200 rounded">
              <h1 className="font-serif text-2xl text-red-900">Something went wrong</h1>
              <p className="mt-2 text-red-700">{this.state.error?.message || 'An unexpected error occurred'}</p>
              <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-red-200 border border-red-400 rounded">
                Reload page
              </button>
            </div>
          </main>
        </div>
      )
    }

    return this.props.children
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-paper text-ink font-sans">
        <header className="max-w-4xl mx-auto px-6 py-8">
          <Link to="/" className="font-serif text-3xl">The Kitchen Edition</Link>
        </header>
        <main className="max-w-4xl mx-auto px-6">
          <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/planner" element={<UpgradeGate requiredPlan="pro"><Planner /></UpgradeGate>} />
          <Route path="/prep" element={<UpgradeGate requiredPlan="pro"><Prep /></UpgradeGate>} />
          <Route path="/grocery" element={<UpgradeGate requiredPlan="pro"><Grocery /></UpgradeGate>} />
          <Route path="/pantry" element={<UpgradeGate requiredPlan="pro"><Pantry /></UpgradeGate>} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/eat-out" element={<UpgradeGate requiredPlan="pro"><EatOut /></UpgradeGate>} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/account" element={<Account />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/ai-planner" element={<UpgradeGate requiredPlan="ultra"><AiPlanner /></UpgradeGate>} />
          <Route path="/ai-assistant" element={<UpgradeGate requiredPlan="ultra"><AiAssistant /></UpgradeGate>} />
        </Routes>
      </main>
    </div>
    </ErrorBoundary>
  )
}
