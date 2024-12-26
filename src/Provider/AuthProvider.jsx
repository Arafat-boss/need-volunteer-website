import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //google provider
  const provider = new GoogleAuthProvider();

  const googleProvider = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //email and password
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userUpdateProfile = (updateData) => {
    setLoading(false);
    return updateProfile(auth.currentUser, updateData);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // useEffect(()=>{
  //     const unsubscribe = onAuthStateChanged(auth, async currentUser=>{
  //         console.log(currentUser);
  //         if(currentUser?.email){
  //           setUser(currentUser)
  //           const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,
  //             {
  //               email: currentUser?.email
  //             },
  //             {withCredentials: true}
  //           )
  //             console.log(data);
  //           }
  //           else{
  //             setUser(currentUser)
  //             const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/logout`,{},
  //               {withCredentials: true}
  //             )
  //             console.log(data);
  //           }
  //           setLoading(false)
  // })
  //         return () =>{
  //             return unsubscribe();
  //         }
  // },[])
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, { withCredentials: true }).then((res) => {
          console.log("login token", res.data);
          setLoading(false);
        });
      } else {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/logout`,
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("logout", res.data);
            setLoading(false);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    setUser,
    registerUser,
    loginUser,
    signOutUser,
    userUpdateProfile,
    googleProvider,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
