const PREFIX = 'tke_cache_v1:'

export function setCache(key: string, value: any, ttlSec = 300){
  const item = { v: value, e: Date.now() + ttlSec * 1000 }
  localStorage.setItem(PREFIX + key, JSON.stringify(item))
}

export function getCache(key: string){
  const raw = localStorage.getItem(PREFIX + key)
  if (!raw) return null
  try {
    const item = JSON.parse(raw)
    if (item.e && Date.now() > item.e) {
      localStorage.removeItem(PREFIX + key)
      return null
    }
    return item.v
  } catch (e) {
    localStorage.removeItem(PREFIX + key)
    return null
  }
}
