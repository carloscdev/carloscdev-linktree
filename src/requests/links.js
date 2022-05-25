
import { db } from "../firebase.js"
import { collection, onSnapshot } from "firebase/firestore"

export const getAllLinks = () => {
  let response = []
  onSnapshot(collection(db, "links"), (snapshot) => {
    response.push(...snapshot.docs.map((doc) => doc.data()).sort((a, b) => a.order - b.order))
  })
  return response
}