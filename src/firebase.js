import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: "AIzaSyA2iki8N3t2q769i0rzCGInRsUCH1FfUrA",
  authDomain: "financial-management-app-4e782.firebaseapp.com",
  projectId: "financial-management-app-4e782",
  storageBucket: "financial-management-app-4e782.appspot.com",
  messagingSenderId: "1080639125120",
  appId: "1:1080639125120:web:fcc431d7f5bdd3b2f15865",
  measurementId: "G-MDJ72CP9MS"
});

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
