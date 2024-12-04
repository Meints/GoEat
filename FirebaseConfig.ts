import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsguKFRGuNLfq8XTiOAuf7qm1OWtdVGz8",
  authDomain: "sabormaarcado.firebaseapp.com",
  projectId: "sabormaarcado",
  storageBucket: "sabormaarcado.firebasestorage.app",
  messagingSenderId: "938806170088",
  appId: "1:938806170088:web:71fc63ac57f886d611545d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
