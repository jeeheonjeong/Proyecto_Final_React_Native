import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDPIY2qMNCWY55UN53YKEJ2Sq1kmplyJrM",
  authDomain: "khan-2c5b8.firebaseapp.com",
  projectId: "khan-2c5b8",
  storageBucket: "khan-2c5b8.firebasestorage.app",
  messagingSenderId: "922090528638",
  appId: "1:922090528638:web:b2e3181e331287baee1d2f",
  measurementId: "G-8QBLMCXV5F"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


export const database = getDatabase(app);

export default app;
