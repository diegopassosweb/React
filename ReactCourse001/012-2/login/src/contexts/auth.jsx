import React, {useState,createContext, useEffect} from "react";
import { useNavigate } from "react-router";
import {api, createSession} from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");


        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }

        setLoading(false);
    }, []);

    const login = async (email,password) => {
        const response = await createSession(email, password);

        console.log('login', response);


        //api criar uma session
        const loggedUser = response.data.user;
        const token = response.data.token;
        

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = `Bearer ${token}`

        
            setUser(loggedUser);
            navigate("/");
        

        setUser({id: '123', email});
    };

    // Para entrar e ser redirecionado para HomePage
    const logout = () => {
        console.log('logout');
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");
    };
    return (
        <AuthContext.Provider value={{authenticated: !!user, user, login, loading, logout}}>
            {children}
        </AuthContext.Provider>
    );
}