import { useState } from 'react'
import { User, LogOut, Settings } from 'lucide-react'

export default function Account() {
  const [user] = useState({
    name: 'Guest User',
    email: 'your-email@example.com',
    plan: 'Free',
    joined: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  })

  const stats = [
    { label: 'Favorite Recipes', value: localStorage.getItem('kitchen-favorites') ? JSON.parse(localStorage.getItem('kitchen-favorites') || '[]').length : 0 },
    { label: 'Meals Planned', value: localStorage.getItem('kitchen-meal-plan') ? Object.values(JSON.parse(localStorage.getItem('kitchen-meal-plan') || '{}')).reduce((c: number, d: any) => c + Object.values(d).filter(Boolean).length, 0) : 0 },
  ]

  return (
    <div className="py-8 max-w-2xl">
      <div className="eyebrow">Settings</div>
      <h1 className="font-serif text-4xl mt-2 mb-8">Account</h1>

      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-amber-600" />
          </div>
          <div>
            <h2 className="font-serif text-2xl">{user.name}</h2>
            <p className="text-gray-600 text-sm">Free Plan • Member since {user.joined}</p>
          </div>
        </div>

        <div className="space-y-4 border-t pt-6">
          <div>
            <label className="text-sm text-gray-600 block mb-1">Email</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="w-full p-2 bg-gray-50 border border-gray-200 rounded text-gray-700"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 block mb-1">Current Plan</label>
            <div className="flex items-center justify-between p-3 bg-amber-50 border border-amber-200 rounded">
              <span className="font-semibold text-amber-900">{user.plan}</span>
              <a href="/pricing" className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                Upgrade →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
            <Settings className="w-5 h-5" />
            Preferences
          </h3>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
            <span className="text-sm">Email me recipe recommendations</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer mt-3">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
            <span className="text-sm">Save my search history</span>
          </label>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Data</h3>
          <p className="text-sm text-gray-600 mb-4">
            All your favorites and meal plans are stored locally on your device.
          </p>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
            Export My Data
          </button>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg text-red-900 flex items-center gap-2 mb-4">
            <LogOut className="w-5 h-5" />
            Danger Zone
          </h3>
          <button className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-900 rounded text-sm">
            Clear All Local Data
          </button>
        </div>
      </div>
    </div>
  )
}
