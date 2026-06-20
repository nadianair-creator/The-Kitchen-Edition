import { useState, useEffect } from 'react'
import { getMealPlan, setMealSlot, removeMealSlot } from '../lib/storage'
import { Calendar } from 'lucide-react'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const MEALS = ['breakfast', 'lunch', 'dinner', 'snack']

export default function Planner() {
  const [plan, setPlan] = useState<any>({})

  useEffect(() => {
    setPlan(getMealPlan())
  }, [])

  const handleAddMeal = (day: string, meal: string) => {
    const recipeName = prompt(`Enter recipe name for ${day} ${meal}:`)
    if (recipeName) {
      setMealSlot(day, meal, { title: recipeName })
      setPlan(getMealPlan())
    }
  }

  const handleRemoveMeal = (day: string, meal: string) => {
    removeMealSlot(day, meal)
    setPlan(getMealPlan())
  }

  return (
    <div className="py-8">
      <div className="eyebrow">Organization</div>
      <h1 className="font-serif text-4xl mt-2 mb-4">Weekly Meal Planner</h1>
      <p className="text-gray-600 mb-8">Plan your entire week at a glance. Click to add or remove meals.</p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="p-2 text-left">Meal</th>
              {DAYS.map(day => (
                <th key={day} className="p-2 text-center font-semibold">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MEALS.map(meal => (
              <tr key={meal} className="border-b border-gray-200">
                <td className="p-2 font-semibold capitalize text-gray-700">{meal}</td>
                {DAYS.map(day => (
                  <td key={`${day}-${meal}`} className="p-2 border-l border-gray-200">
                    <div className="bg-gray-50 rounded p-2 min-h-20 flex flex-col justify-between">
                      {plan[day]?.[meal] ? (
                        <div>
                          <p className="text-sm font-medium">{plan[day][meal].title}</p>
                          <button
                            onClick={() => handleRemoveMeal(day, meal)}
                            className="text-xs text-red-600 hover:text-red-800 mt-2"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddMeal(day, meal)}
                          className="text-xs text-blue-600 hover:text-blue-800 py-1"
                        >
                          + Add
                        </button>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Build your plan here, then go to "Shopping List" to auto-generate ingredients for all your meals.
        </p>
      </div>
    </div>
  )
}
