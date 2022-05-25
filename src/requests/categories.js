
import { db } from "../firebase.js"
import { collection, onSnapshot } from "firebase/firestore"

export const getAllCategories = () => {
  let response = []
  onSnapshot(collection(db, "categories"), (snapshot) => {
    response.push(...snapshot.docs.map((doc) => doc.data()).sort((a, b) => a.order - b.order))
  })
  return response
}