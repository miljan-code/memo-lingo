import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'memo-lingo.firebaseapp.com',
  projectId: 'memo-lingo',
  storageBucket: 'memo-lingo.appspot.com',
  messagingSenderId: '1060752453714',
  appId: '1:1060752453714:web:8977983bcaac44fe412f8b',
  measurementId: 'G-7TBNLL2NS9',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
