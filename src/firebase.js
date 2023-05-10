// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKDo0I70YWl8ykXzPvx30M4fTRXQdXT0Y",
  authDomain: "diploma-7508b.firebaseapp.com",
  projectId: "diploma-7508b",
  storageBucket: "diploma-7508b.appspot.com",
  messagingSenderId: "780245895806",
  appId: "1:780245895806:web:6c34e13fef27a8d4cf262f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

export const categoryCollection = collection(db, 'categories');
export const productsCollection = collection(db, 'products');
export const ordersCollection = collection(db, 'orders');
export const storage = getStorage(app);

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);
export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onProductsLoad = (callback) =>
  onSnapshot(productsCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onOrdersLoad = (callback) =>
  onSnapshot(ordersCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );

export const uploadProductPhoto = async (file) => {
  const storageRef = ref(storage, `proucts/${file.name}`);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);
  return url;

}