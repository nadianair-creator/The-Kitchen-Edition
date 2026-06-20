import React from 'react'

export default function Pricing(){
  return (
    <section className="py-8">
      <div className="eyebrow">Pricing</div>
      <h1 className="font-serif text-3xl mt-2 mb-4">Membership Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-200 bg-white p-6">Free</div>
        <div className="border border-gray-200 bg-white p-6">Pro</div>
        <div className="border border-gray-200 bg-white p-6">Ultra</div>
      </div>
    </section>
  )
}
