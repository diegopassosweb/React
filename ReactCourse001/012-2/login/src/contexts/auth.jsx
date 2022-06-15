import React, {useState,createContext} from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const login = (email,password) => {
        console.log('login', {email,password});

        //api criar uma session
        const loggedUser = {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password === "secret") {
            setUser(loggedUser);
            navigate("/");
        }

        setUser({id: '123', email});
    };

    // Para entrar e ser redirecionado para HomePage
    const logout = () => {
        console.log('logout');
        setUser(null);
        navigate("/login");
    };
    return (
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}