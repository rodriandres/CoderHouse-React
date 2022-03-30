
import { initializeApp } from "firebase/app";
import { doc, query, collection, where, getDoc, getDocs, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_ApiKey,
  authDomain: process.env.REACT_APP_AuthDomain,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  appId: process.env.REACT_APP_AppId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Managment Firebase's methods
export const getsProducts = (categoryId) => {
  return new Promise((resolve,reject)=>{

    const collectionRef = categoryId ? 
            query(collection(db, 'itemCollection'), where('category', '==', categoryId)) :
            collection(db, 'itemCollection')

    getDocs(collectionRef)
    .then( (response)=>{
        const products = response.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
        resolve(products);
    }).catch((error) => {
      reject("Error al obtener productos: ", error);
    })

  })
}

export const getProduct = (productId) => {
  return new Promise((resolve, reject)=>{
    const docRef = doc(db, 'itemCollection', productId);
    
    getDoc(docRef)
    .then( (response)=>{
        const item = {id: response.id, ...response.data()}
        resolve(item);
    }).catch((error) => {
      reject("Error al obtener el producto: ", error);
    })
  })
}