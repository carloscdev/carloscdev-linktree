
import { db } from "../firebase.js"
import { collection, getDocs } from "firebase/firestore"

export const getProfileApi = async () => {
  try {
    const profileRef = collection(db, 'profile')
    const profileSnapshot = await getDocs(profileRef)
    const profile = profileSnapshot.docs.map((item) => ({
      ...item.data()
    }))
    const response = profile.sort((a, b) => a.order - b.order)
    return response
  } catch (error) {
    throw error
  }
}