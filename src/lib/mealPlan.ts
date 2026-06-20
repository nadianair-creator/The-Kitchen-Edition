import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from './firebase'

export function subscribeToWeekPlan(userId: string, weekId: string, onChange: (plan: any | null) => void){
  const ref = doc(db, 'users', userId, 'mealPlans', weekId)
  return onSnapshot(ref, (snap) => onChange(snap.exists() ? (snap.data() as any) : null))
}

export async function setMealSlot(userId: string, weekId: string, day: string, meal: 'breakfast'|'lunch'|'dinner', recipeRef: any | null){
  const ref = doc(db, 'users', userId, 'mealPlans', weekId)
  await setDoc(ref, { days: { [day]: { [meal]: recipeRef } }, updatedAt: Date.now() }, { merge: true })
}
