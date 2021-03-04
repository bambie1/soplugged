const admin = require("firebase-admin");
const serviceAccount = require("../../soplugged-stg-firebase-adminsdk-wb669-7fcf6ea519.json");

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
