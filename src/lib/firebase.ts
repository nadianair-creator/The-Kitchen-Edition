import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

let app: any = null
let db: any = null

try {
  if (firebaseConfig.projectId) {
    app = initializeApp(firebaseConfig)
    db = getFirestore(app)
  } else {
    console.warn('Firebase config incomplete — skipping init')
  }
} catch (e) {
  console.warn('Firebase init failed:', e)
}

export { app, db }

export const analyticsPromise = (async () => {
  if (!app) return null
  try {
    const ok = await isSupported()
    return ok ? getAnalytics(app) : null
  } catch (e) {
    console.warn('Analytics init failed:', e)
    return null
  }
})()
