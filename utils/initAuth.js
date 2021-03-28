import { init } from "next-firebase-auth";
const serviceAccount = process.env.FB_PRIVATE_KEY_JSON
  ? JSON.parse(process.env.FB_PRIVATE_KEY_JSON)
  : undefined;
const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;

const initAuth = () => {
  init({
    debug: false,
    authPageURL: "/join",
    appPageURL: "/dashboard",
    loginAPIEndpoint: "/api/login",
    logoutAPIEndpoint: "/api/logout",
    firebaseAdminInitConfig: {
      credential: serviceAccount,
    },
    firebaseClientInitConfig: {
      apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
      appId: process.env.NEXT_PUBLIC_FB_APP_ID,
      messagingSenderId: process.env.NEXT_PUBLIC_FB_MSG_SENDER_ID,
    },
    cookies: {
      name: "SoPlugged",
      httpOnly: true,
      maxAge: TWELVE_DAYS_IN_MS,
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: false,
      signed: false,
    },
  });
};

export default initAuth;
