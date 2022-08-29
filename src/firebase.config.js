import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIRGUklMgLtr_AsYV6gvshKC-GlXudh7c",
  authDomain: "food-delivery-4c3c2.firebaseapp.com",
  databaseURL: "https://food-delivery-4c3c2-default-rtdb.firebaseio.com",
  projectId: "food-delivery-4c3c2",
  storageBucket: "food-delivery-4c3c2.appspot.com",
  messagingSenderId: "918210233832",
  appId: "1:918210233832:web:3e893958c063c2b52d105d"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };