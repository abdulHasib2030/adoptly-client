import React, { createContext, useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import axios from 'axios';
import toast from 'react-hot-toast';


export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] =useState(true);
    const [user, setUser] = useState(null);

    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) =>{
    setLoading(true)
       return  createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (userData) =>{
        return updateProfile(auth.currentUser, userData)
    }

    const googleAuth = () =>{
       
        return signInWithPopup(auth, provider)
    }


    const gitHubAuth = () =>{
        return signInWithPopup(auth, githubProvider)
    }

   useEffect(()=>{
    const subscribe  = onAuthStateChanged(auth, (currentUser)=>{
        currentUser ? setUser(currentUser) : setUser(null)
        
        if(currentUser?.email){
            const user = {email: currentUser.email}
            axiosPublic.post(`/jwt`, user)
            .then(res => {
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token)
                }
                axiosPublic.get(`/user?email=${currentUser.email}`)
                .then(response =>{
                    if(response.data.role === 'admin'){
                        setIsAdmin(true)
                    }else{
                        setIsAdmin(false)
                    }
                })
                setLoading(false)
            })
        }
        else{
            setLoading(false)
            localStorage.removeItem('access-token')
        }
    })
    return ()=>{
        subscribe()
    }
   }, [axiosPublic])

   const logoutUser = () =>{
    setLoading(false)
   toast.success("Successfully logout.")
    return signOut(auth)

   }
    
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser, 
        loginUser,
        updateUserProfile,
        logoutUser,
        googleAuth,
        gitHubAuth,
        isAdmin
    
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;