import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-mHy3-ZSGz25r0BjZAoAdE4MdNwUT4ek',
  authDomain: 'nash-valloon-9f156.firebaseapp.com',
  projectId: 'nash-valloon',
  storageBucket: 'nash-valloon.appspot.com',
  messagingSenderId: '381844762414',
  appId: '1:381844762414:web:f86eea03cd4b17876cd4bf',
  measurementId: 'G-CJ6ZZ9Z1S6',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
