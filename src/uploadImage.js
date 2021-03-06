import firebase from "firebase/app";
import "firebase/storage";

export const getImageUrl = async (file) => {
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(file.name);
  await fileRef.put(file);
  const fileUrl = await fileRef.getDownloadURL();
  return fileUrl;
};
