import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebasse/firebase.config";
import axios from "axios";
// import axios from "axios";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    // user create 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }


    // sign in 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email : userEmail}
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);

            if(currentUser){

                

                axios.post('https://genius-car-server-sigma-khaki.vercel.app/jwt',loggedUser,{withCredentials : true})
                .then(res => {
                    console.log('token responsse',res.data);
                })
            }
            else{
                axios.post('https://genius-car-server-sigma-khaki.vercel.app/logout',loggedUser,{withCredentials : true})
                .then(res => {
                    console.log(res.data)
                })
            }

            

        })

        return () => {
            return unsubsribe();
        }
    }, [])


    const info = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;