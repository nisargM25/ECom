import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthClientContext = createContext()

export const AuthClientContextProvider = ({ children }) => {
    const [currentClient, setCurrentClient] = useState(JSON.parse(localStorage.getItem("customer")) || null)
    
    const clogin = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/clogin", inputs);
        setCurrentClient(res.data)
    }

    useEffect(()=>{
        localStorage.setItem("customer",JSON.stringify(currentClient));
    },[currentClient])


    const clogout = async (inputs) => {
        await axios.post("http://localhost:8800/api/auth/clogout");
        setCurrentClient(null)
    }
    return <AuthClientContext.Provider value={{currentClient,clogin,clogout}}>{children}</AuthClientContext.Provider>
    
}
