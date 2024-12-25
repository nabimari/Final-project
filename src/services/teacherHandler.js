import { doc, getDoc, getDocs, collection, updateDoc } from "firebase/firestore"
import { db, auth } from "../firebase"

export const getAllTeachers = async () => {
    try {
        const teachersCollection = collection(db, "Teachers")
        const existingEmails = await getDocs(teachersCollection)

        return existingEmails

    } catch (error) {
        console.error(error)
    }
}

export const getTeacherById = async (id) => {
    try {

        const teacherDoc = await getDoc(doc(db, "Teachers", id))
        return teacherDoc
    } catch (error) {
        console.error(error)
    }
}

export const updateData = async (doc, data) => {
    try {
        return await updateDoc(doc, data)
    } catch (error) {
        console.error(error)
    }
}
