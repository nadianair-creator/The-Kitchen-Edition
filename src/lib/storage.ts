export interface MealPlanDay {
  breakfast?: any
  lunch?: any
  dinner?: any
  snack?: any
}

export interface MealPlan {
  [key: string]: MealPlanDay
}

export interface FavoriteRecipe {
  id: number
  title: string
  image: string
  savedAt: number
}

const FAVORITES_KEY = 'kitchen-favorites'
const MEAL_PLAN_KEY = 'kitchen-meal-plan'

// Favorites
export function getFavorites(): FavoriteRecipe[] {
  try {
    const data = localStorage.getItem(FAVORITES_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function addFavorite(recipe: FavoriteRecipe): void {
  try {
    const favorites = getFavorites()
    if (!favorites.find(f => f.id === recipe.id)) {
      favorites.push({ ...recipe, savedAt: Date.now() })
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    }
  } catch (error) {
    console.error('Error adding favorite:', error)
  }
}

export function removeFavorite(recipeId: number): void {
  try {
    const favorites = getFavorites()
    const updated = favorites.filter(f => f.id !== recipeId)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))
  } catch (error) {
    console.error('Error removing favorite:', error)
  }
}

export function isFavorite(recipeId: number): boolean {
  return getFavorites().some(f => f.id === recipeId)
}

// Meal Plans
export function getMealPlan(): MealPlan {
  try {
    const data = localStorage.getItem(MEAL_PLAN_KEY)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

export function setMealSlot(day: string, meal: string, recipe: any): void {
  try {
    const plan = getMealPlan()
    if (!plan[day]) plan[day] = {}
    plan[day][meal as keyof MealPlanDay] = recipe
    localStorage.setItem(MEAL_PLAN_KEY, JSON.stringify(plan))
  } catch (error) {
    console.error('Error setting meal:', error)
  }
}

export function removeMealSlot(day: string, meal: string): void {
  try {
    const plan = getMealPlan()
    if (plan[day]) {
      delete plan[day][meal as keyof MealPlanDay]
      localStorage.setItem(MEAL_PLAN_KEY, JSON.stringify(plan))
    }
  } catch (error) {
    console.error('Error removing meal:', error)
  }
}

// Shopping List (derived from meal plan)
export function getShoppingList(): string[] {
  const plan = getMealPlan()
  const ingredients = new Set<string>()
  
  Object.values(plan).forEach(day => {
    Object.values(day).forEach((meal: any) => {
      if (meal?.extendedIngredients) {
        meal.extendedIngredients.forEach((ing: any) => {
          ingredients.add(`${ing.amount} ${ing.unit} ${ing.name}`)
        })
      }
    })
  })
  
  return Array.from(ingredients).sort()
}
