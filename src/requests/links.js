
import { db } from "../firebase.js"
import { collection, getDocs } from "firebase/firestore"

export const getAllLinksApi = async () => {
  try {
    const linksRef = collection(db, 'links')
    const linksSnapshot = await getDocs(linksRef)
    const links = linksSnapshot.docs.map((item) => ({
      ...item.data()
    }))
    const response = links.sort((a, b) => a.order - b.order)
    return response
  } catch (error) {
    throw error
  }
}