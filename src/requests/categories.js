
import { db } from "../firebase.js"
import { collection, getDocs } from "firebase/firestore"

export const getAllCategoriesApi = async () => {
  try {
    const categoriesRef = collection(db, 'categories')
    const categoriesSnapshot = await getDocs(categoriesRef)
    const categories = categoriesSnapshot.docs.map((item) => ({
      ...item.data()
    }))
    const response = categories.sort((a, b) => a.order - b.order)
    return response
  } catch (error) {
    throw error
  }
}