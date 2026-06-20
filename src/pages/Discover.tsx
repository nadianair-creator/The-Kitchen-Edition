import React, { useState } from 'react'
import { complexSearch, searchByIngredients } from '../lib/spoonacular'
import { getCache, setCache } from '../lib/cache'

const DIETS = ['vegan','vegetarian','gluten free','keto','paleo','pescetarian','whole30']
const INTOLERANCES = ['dairy','egg','gluten','peanut','sesame','seafood','shellfish','soy','tree nut','wheat']

export default function Discover(){
  const [query, setQuery] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [diet, setDiet] = useState<string | null>(null)
  const [intolerances, setIntolerances] = useState<string[]>([])
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function doSearchByName(){
    const key = `search:name:${query}:diet:${diet}:int:${intolerances.join(',')}`
    const cached = getCache(key)
    if (cached) {
      setResults(cached.results ?? [])
      setError(null)
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await complexSearch({ query: query || undefined, diet: diet || undefined, intolerances: intolerances })
      const items = res.results ?? res?.items ?? []
      setCache(key, { results: items }, 300)
      setResults(items)
    } catch (e) {
      const msg = `Search failed: ${e instanceof Error ? e.message : String(e)}`
      console.error(msg)
      setError(msg)
    } finally { setLoading(false) }
  }

  async function doSearchByIngredients(){
    const list = ingredients.split(/[,\n]/).map(s=>s.trim()).filter(Boolean)
    if (!list.length) {
      setError('Enter at least one ingredient')
      return
    }
    const key = `search:ing:${list.join(',')}`
    const cached = getCache(key)
    if (cached) {
      setResults(cached.results ?? [])
      setError(null)
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await searchByIngredients(list)
      setCache(key, { results: res }, 300)
      setResults(res)
    } catch (e) {
      const msg = `Search failed: ${e instanceof Error ? e.message : String(e)}`
      console.error(msg)
      setError(msg)
    } finally { setLoading(false) }
  }

  function toggleIntolerance(t: string){
    setIntolerances(prev => prev.includes(t) ? prev.filter(x=>x!==t) : [...prev,t])
  }

  return (
    <section className="py-8">
      <div className="eyebrow">Vol. I — Ed. №1</div>
      <h1 className="font-serif text-4xl mt-2 mb-4">Discover</h1>
      <p className="text-sm text-gray-600 mb-6">Curated recipes and search by ingredients or name.</p>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Search by name</label>
          <div className="flex gap-2">
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="e.g. pasta" className="flex-1 p-2 border rounded" />
            <button onClick={doSearchByName} className="px-3 py-2 border rounded hover:bg-gray-100">Search</button>
          </div>
          <div className="mt-2">
            <label className="text-sm mr-2">Diet:</label>
            {DIETS.map(d=> (
              <button key={d} onClick={()=>setDiet(diet===d?null:d)} className={`text-sm mr-2 px-2 py-1 border rounded ${diet===d?'bg-gray-200':''}`}>{d}</button>
            ))}
          </div>
          <div className="mt-2">
            <label className="text-sm">Exclude intolerances:</label>
            <div className="flex flex-wrap mt-1 gap-2">
              {INTOLERANCES.map(i=> (
                <button key={i} onClick={()=>toggleIntolerance(i)} className={`text-xs px-2 py-1 border rounded ${intolerances.includes(i)?'bg-gray-200':''}`}>{i}</button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Search by ingredients (comma or newline separated)</label>
          <textarea value={ingredients} onChange={e=>setIngredients(e.target.value)} className="w-full p-2 border rounded h-28" />
          <div className="mt-2">
            <button onClick={doSearchByIngredients} className="px-3 py-2 border rounded hover:bg-gray-100">Find recipes</button>
          </div>
        </div>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">{error}</div>}

      <div>
        {loading ? <div className="text-gray-600">Loading...</div> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {results.length === 0 ? <div className="text-sm text-gray-600">No results. Try a search!</div> : results.map((r:any) => (
              <article key={r.id || r.title} className="bg-white border border-gray-200 p-4 rounded">
                <div className="grid grid-cols-3 gap-4">
                  {r.image && <img src={r.image} alt={r.title} className="col-span-1 w-full h-24 object-cover rounded" />}
                  <div className={r.image ? 'col-span-2' : 'col-span-3'}>
                    <h3 className="font-semibold text-sm">{r.title}</h3>
                    <div className="text-xs text-gray-600">{r.readyInMinutes ? `${r.readyInMinutes} min` : ''}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
