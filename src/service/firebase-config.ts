import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'react-blog-4aeed.firebaseapp.com',
  projectId: 'react-blog-4aeed',
  storageBucket: 'react-blog-4aeed.appspot.com',
  messagingSenderId: '71632937582',
  appId: '1:71632937582:web:c4c3cb243e2bfb1c15fc7f',
  measurementId: 'G-H07WF7CNGC',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
