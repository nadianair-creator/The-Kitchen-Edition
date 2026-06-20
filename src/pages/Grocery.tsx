import { useState, useEffect } from 'react'
import { getShoppingList, getMealPlan } from '../lib/storage'
import { ShoppingCart, Check } from 'lucide-react'

export default function Grocery() {
  const [items, setItems] = useState<string[]>([])
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const plan = getMealPlan()

  useEffect(() => {
    setItems(getShoppingList())
  }, [])

  const toggleCheck = (item: string) => {
    const newChecked = new Set(checked)
    if (newChecked.has(item)) {
      newChecked.delete(item)
    } else {
      newChecked.add(item)
    }
    setChecked(newChecked)
  }

  const handlePrint = () => {
    window.print()
  }

  const mealsPlanned = Object.values(plan).reduce((count, day: any) => {
    return count + Object.values(day).filter(Boolean).length
  }, 0)

  return (
    <div className="py-8">
      <div className="eyebrow">Essentials</div>
      <h1 className="font-serif text-4xl mt-2 mb-4">Shopping List</h1>
      <p className="text-gray-600 mb-8">Auto-generated from your {mealsPlanned} planned meals.</p>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">Plan some meals first to generate a shopping list!</p>
        </div>
      ) : (
        <>
          <div className="mb-6 flex gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Print List
            </button>
            <div className="text-sm text-gray-600 flex items-center">
              {checked.size} of {items.length} items checked
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg divide-y">
            {items.map((item, idx) => (
              <label key={idx} className="flex items-center p-4 hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked.has(item)}
                  onChange={() => toggleCheck(item)}
                  className="w-5 h-5 rounded"
                />
                <span
                  className={`ml-3 text-sm ${
                    checked.has(item)
                      ? 'line-through text-gray-400'
                      : 'text-gray-700'
                  }`}
                >
                  {item}
                </span>
              </label>
            ))}
          </div>
        </>
      )}

      <div className="mt-8 p-4 bg-amber-50 rounded">
        <p className="text-sm text-amber-800">
          <strong>Pro tip:</strong> Check off items as you shop. This list is saved locally on your device.
        </p>
      </div>
    </div>
  )
}
