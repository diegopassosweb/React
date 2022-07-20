import React, {createContext, useEffect, useState} from "react"

import { useNavigate } from "react-router";
import {api, createSession} from "../services/api"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(false);
    }, [])

    const login = async (email, password) => {

        console.log("login auth", {email, password})

        const response = await createSession(email, password)

        console.log("login", response.data)

        const LoggedUser = response.data.user;
        const token = response.data.token

        localStorage.setItem("user", JSON.stringify(LoggedUser))
        localStorage.setItem("token", token)

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(LoggedUser)
        navigate("/")
        
    }
    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = null;
        setUser(null)
        navigate("/login")
    }
    return (
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}