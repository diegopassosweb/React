import React, { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    const[email, setEmail] = useState('');
    const [password, setPassowrd] = useState('')

    // const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    //     setEmail(event.target.value)
    // }
    
    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password)
            if(isLogged){
                navigate('/')
            } else {
                alert("Nao deu certo")
            }
        }
    }
    return (
        <div>
            <h2>Pagina Fechada</h2>
           <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder="Digite seu e-mail" />
           {/* <input type="text" onChange={handleEmailInput} value={email} placeholder="Digite seu e-mail" /> */}
           <input type="text" onChange={e => setPassowrd(e.target.value)} value={password} placeholder="Digite sua senha" />
           <button onClick={handleLogin}>Logar</button>
        </div>
    )
}