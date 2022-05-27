import { useState, createContext } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({children}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = ({name, email}) => {
      console.log('dados App', {name, email})
      setEmail(email)
      setName(name)
    }
    return (
        <CustomerContext.Provider value={{name, email, submit: handleSubmit}}>
        {children}
        </CustomerContext.Provider>
    )
}