import firebase from "firebase/app";

const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MSG_SENDER_ID,
};

export default function firebaseClient() {
  if (!firebase.apps?.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
