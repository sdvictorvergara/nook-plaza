import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUibp-32__HcOUgD4MI5ocW47ON0oKpQY",
  authDomain: "nook-plaza-7babb.firebaseapp.com",
  projectId: "nook-plaza-7babb",
  storageBucket: "nook-plaza-7babb.firebasestorage.app",
  messagingSenderId: "1036331868016",
  appId: "1:1036331868016:web:c0ed24b479e6995c5a79b5",
};

export const db = getFirestore(initializeApp(firebaseConfig));
