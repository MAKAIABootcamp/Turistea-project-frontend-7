import { collection, addDoc } from "firebase/firestore"; 
import { database } from "../../firebase/firebaseConfig";
import { fillTravels, travelsFail, travelsRequest } from "./travelSlice";

const COLLECTION_NAME='Travels'
const collectionRef=collection(database, COLLECTION_NAME)

export const actionAddTravel = (newTravel) =>{
    return async (dispatch) => {
        dispatch(travelsRequest())
        try {
          const docRef = await addDoc(collectionRef, newTravel);
          dispatch(fillTravels({
            id: docRef.id,
            ...newTravel,
          }))
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
          dispatch(travelsFail(e.message))
        }

    }
}

