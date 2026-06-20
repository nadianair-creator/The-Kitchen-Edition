import { Link } from 'react-router-dom'
import { ChefHat, Search, Calendar, ShoppingCart, Heart, Settings } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Discover Recipes",
      desc: "Browse thousands of recipes filtered by diet, cuisine, and ingredients",
      link: "/discover"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Plan Your Week",
      desc: "Drag and drop recipes to build your perfect weekly meal plan",
      link: "/planner"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Smart Shopping",
      desc: "Auto-generated shopping lists from your planned meals",
      link: "/grocery"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Save Favorites",
      desc: "Bookmark your go-to recipes for quick access",
      link: "/favorites"
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ChefHat className="w-12 h-12" />
            <h1 className="font-serif text-5xl md:text-6xl">The Kitchen Edition</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Editorial meal planning for the mindful cook
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover curated recipes, plan your week with ease, and never wonder what's for dinner again.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/discover" className="px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-medium transition">
              Start Discovering
            </Link>
            <Link to="/pricing" className="px-8 py-3 border border-gray-400 hover:bg-gray-700 rounded-lg font-medium transition">
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <Link to={feature.link} key={idx} className="group">
                <div className="text-amber-600 mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-6">Ready to transform your cooking?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Join thousands of home cooks who've made meal planning effortless.
          </p>
          <Link to="/discover" className="inline-block px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 rounded-lg font-medium transition">
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  )
}
