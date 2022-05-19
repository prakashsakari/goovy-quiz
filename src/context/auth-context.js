import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { passwordReducer } from "../reducer";
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "@firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, passwordDispatch] = useReducer(passwordReducer, {
    display: "none",
    password: "",
    confirmPassword: "",
    email: "",
    isEmailValid: true,
    userName: ""
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) setUser(user)
      else setUser(null)
    })
  }, [user])

  const navigate = useNavigate();

  const userSignup = async (email, password) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      console.log(data)
      navigate("/login")
    }catch(error){
      console.log("Invalid ka Error -", error);
    }
  }

  const userLogin = async (email, password) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data);
      navigate("/")
    }catch(error){
      console.log("Invalid ka Error -", error);

    }
  }

  const logout = () => {
    signOut(auth);
    navigate("/login");
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ state, passwordDispatch, userSignup, userLogin, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
