const admin = require("firebase-admin");
const serviceAccount = process.env.NEXT_PUBLIC_FB_PRIVATE_KEY_JSON
  ? JSON.parse(process.env.NEXT_PUBLIC_FB_PRIVATE_KEY_JSON)
  : undefined;

export const verifyIdToken = (token) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};
