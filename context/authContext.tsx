import { useState, useEffect, useContext, createContext, FC } from "react";
import { useRouter } from "next/router";
import nookies from "nookies";
import firebase from "firebase/app";
import "firebase/auth";
import toast from "react-hot-toast";

import firebaseClient from "../firebase/firebaseClient";

const AuthContext = createContext<any>({});

export const AuthProvider: FC = ({ children }) => {
  const router = useRouter();

  firebaseClient();
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
        setLoading(false);
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, "token", token, {});
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebase.auth().currentUser;
      if (user) {
        const token = await user.getIdToken(true);
        nookies.set(undefined, "token", token, {});
      }
    }, 30 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  const signOutUser = async () => {
    await firebase.auth().signOut();
    router.reload();
    toast.success("Sign out successful");
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
