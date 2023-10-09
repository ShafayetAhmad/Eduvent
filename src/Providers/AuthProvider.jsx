// AuthProvider.js
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toastId, setToastId] = useState(null);

  const googleAuthProvider = new GoogleAuthProvider();

  const showToast = (message) => {
    const newToastId = toast.success(`🦄 Succesfully ${message}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(`old toastid`, toastId);
    setToastId(newToastId);
  };

  const googleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleAuthProvider);
      showToast("Logged In");
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating user:", error.code, error.message);
      throw error;
    } finally {
      showToast("Registered");
      setLoading(false);
    }
  };

  const logIn = (email, password) => {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    } finally {
      showToast("Logged In");
    }
    setLoading(true);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        
        showToast("Logged Out");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          createUser,
          googleSignIn,
          logIn,
          logOut,
          loading,
          setUser,
        }}
      >
        {children}
      </AuthContext.Provider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AuthProvider;
