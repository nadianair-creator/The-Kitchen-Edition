import { useState, useEffect } from 'react'
import { getFavorites, removeFavorite } from '../lib/storage'
import { Heart } from 'lucide-react'

export default function Favorites() {
  const [favorites, setFavorites] = useState<any[]>([])

  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  const handleRemove = (id: number) => {
    removeFavorite(id)
    setFavorites(getFavorites())
  }

  return (
    <div className="py-8">
      <div className="eyebrow">Your Collection</div>
      <h1 className="font-serif text-4xl mt-2 mb-4">Saved Favorites</h1>
      <p className="text-gray-600 mb-8">Recipes you love, organized and ready to use.</p>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">No favorites yet. Start exploring to save recipes!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <article key={recipe.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              {recipe.image && (
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{recipe.title}</h3>
                <div className="text-xs text-gray-500 mb-4">
                  Saved {new Date(recipe.savedAt).toLocaleDateString()}
                </div>
                <button
                  onClick={() => handleRemove(recipe.id)}
                  className="w-full px-3 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded text-sm transition"
                >
                  Remove from Favorites
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
