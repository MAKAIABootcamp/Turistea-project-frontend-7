//Aqui iran las funciones asincronicas 
import {
  collection,
  where,
  addDoc,
  query,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { firestore } from "/src/firebase/firebaseConfig.js";
import { loadProfile } from "../configUser/userPerfil";

const COLLECTION_NAME = "usuarios";
const COLLECTION = collection(firestore, COLLECTION_NAME);

export const getCollection = () => {
  
  return async (dispatch) => {
    
    try {
      const q = query(COLLECTION, where("isAuth", "==", true));
      const querySnapshot = await getDocs(q);
      const usuario = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(loadProfile(usuario));
    } catch (error) {
    console.error(error);
    console.log("mhhuu")

  }}
};


