import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Platform } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyCu1OjXLCxxVtOW1e6BgfbvrnPyhXKayzo",
  authDomain: "unipam-eduarda-app.firebaseapp.com",
  projectId: "unipam-eduarda-app",
  storageBucket: "unipam-eduarda-app.firebasestorage.app",
  messagingSenderId: "739542694330",
  appId: "1:739542694330:web:ced2e12fb47d18813d0583",
  measurementId: "G-L2BVNMWJEL"
};

const app = initializeApp(firebaseConfig);

let auth;
if (Platform.OS === 'web') {
  auth = getAuth(app);
} else {
  const AsyncStorage = require('@react-native-async-storage/async-storage').default;
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { auth };
export const db = getFirestore(app);