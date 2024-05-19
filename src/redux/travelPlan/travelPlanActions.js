import { collection, addDoc } from "firebase/firestore"; 
import { database } from "../../firebase/firebaseConfig";

const COLLECTION_NAME='SavingsPlan'
const collectionRef=collection(database, COLLECTION_NAME)

const actionAddTravelPlans = (newTravelPlans) =>{
    return async (dispatch) => {
        dispatch(travelPlansRequest())
        try {
          const docRef = await addDoc(collectionRef, newTravelPlans);
          dispatch(fillTravelPlans({
            id: docRef.id,
            ...newTravelPlans,
          }))
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
          dispatch(travelPlansFail(e.message))
        }

    }
}
