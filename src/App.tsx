import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Planner from './pages/Planner'
import Grocery from './pages/Grocery'
import Favorites from './pages/Favorites'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Account from './pages/Account'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-bold hover:opacity-80 transition">
            The Kitchen Edition
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/discover" className="hover:text-amber-600 transition">Discover</Link>
            <Link to="/planner" className="hover:text-amber-600 transition">Planner</Link>
            <Link to="/grocery" className="hover:text-amber-600 transition">Shopping</Link>
            <Link to="/favorites" className="hover:text-amber-600 transition">Favorites</Link>
            <Link to="/about" className="hover:text-amber-600 transition">About</Link>
            <Link to="/pricing" className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition">
              Pricing
            </Link>
            <Link to="/account" className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-semibold hover:bg-amber-200 transition">
              U
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-gray-50">
            <nav className="px-6 py-4 space-y-3">
              <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-amber-600">Home</Link>
              <Link to="/discover" onClick={() => setMenuOpen(false)} className="block hover:text-amber-600">Discover</Link>
              <Link to="/planner" onClick={() => setMenuOpen(false)} className="block hover:text-amber-600">Planner</Link>
              <Link to="/grocery" onClick={() => setMenuOpen(false)} className="block hover:text-amber-600">Shopping</Link>
              <Link to="/favorites" onClick={() => setMenuOpen(false)} className="block hover:text-amber-600">Favorites</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-amber-600">About</Link>
              <Link to="/pricing" onClick={() => setMenuOpen(false)} className="block hover:text-amber-600">Pricing</Link>
              <Link to="/account" onClick={() => setMenuOpen(false)} className="block hover:text-amber-600">Account</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><Link to="/discover" className="hover:text-amber-600">Discover</Link></li>
                <li><Link to="/pricing" className="hover:text-amber-600">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><Link to="/about" className="hover:text-amber-600">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Account</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><Link to="/account" className="hover:text-amber-600">Settings</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-amber-600">Privacy</a></li>
                <li><a href="#" className="hover:text-amber-600">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
            <p>&copy; 2026 The Kitchen Edition. Editorial meal planning made simple.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
