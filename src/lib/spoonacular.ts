const BASE_URL = 'https://api.spoonacular.com'
const API_KEY = '81425b27ea3940ae8f24209957fcceff'

export async function searchByIngredients(ingredients: string[]) {
  const url = `${BASE_URL}/recipes/findByIngredients?ingredients=${ingredients.join(",")}&number=12&ranking=2&apiKey=${API_KEY}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Spoonacular request failed')
  return res.json()
}

export async function complexSearch(params: { query?: string; diet?: string; intolerances?: string[] }) {
  const search = new URLSearchParams({
    apiKey: API_KEY,
    number: '12',
    addRecipeInformation: 'true',
    ...(params.query && { query: params.query }),
    ...(params.diet && { diet: params.diet }),
    ...(params.intolerances?.length && { intolerances: params.intolerances.join(',') })
  })
  const res = await fetch(`${BASE_URL}/recipes/complexSearch?${search}`)
  if (!res.ok) throw new Error('Spoonacular request failed')
  return res.json()
}

export async function getRecipeInfo(id: number){
  const res = await fetch(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`)
  if (!res.ok) throw new Error('Spoonacular request failed')
  return res.json()
}
