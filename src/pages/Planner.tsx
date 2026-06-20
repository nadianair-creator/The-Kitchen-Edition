import React from 'react'

export default function Planner(){
  return (
    <section className="py-8">
      <div className="eyebrow">Planner</div>
      <h1 className="font-serif text-3xl mt-2 mb-4">Weekly Meal Planner</h1>
      <p className="text-sm text-gray-600 mb-6">Drag recipes into slots. Live-sync via Firestore.</p>
      <div className="border border-gray-200 bg-white p-6">Planner grid placeholder</div>
    </section>
  )
}
