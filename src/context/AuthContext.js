import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,
    signOut, updateProfile
} from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import { firebaseConfig } from '../firebaseConfig';
const app = initializeApp(firebaseConfig);

const userContext = createContext()

export const useAuth = () => {
    return useContext(userContext)
}

const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    //Signup
    const signUp = async (email, password, displayName) => {
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, email, password)

        // update profile
        await updateProfile(auth.currentUser, {
            displayName: displayName,
        })

        const authUser = auth.currentUser;
        setUser({ ...authUser })
    }

    // Login 
    const login = async (email, password) => {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
        const authUser = auth.currentUser;
        setUser({ ...authUser })
    }

    // SignOut
    const logOut = async () => {
        const auth = getAuth();
        await signOut(auth);
        setUser(null)
    }

    const value = {
        user,
        signUp,
        login,
        logOut,
    }

    return (
        <userContext.Provider value={value}>
            {!loading && children}
        </userContext.Provider>
    );
};

export default AuthContext;