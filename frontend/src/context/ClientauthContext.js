import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentClient, setCurrentClient] = useState(JSON.parse(localStorage.getItem("user")) || null)
    
    const clogin = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/clogin", inputs);
        setCurrentClient(res.data)
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentClient));
    },[currentClient])


    const clogout = async (inputs) => {
        await axios.post("http://localhost:8800/api/auth/clogout");
        setCurrentClient(null)
    }
    return <AuthContext.Provider value={{currentClient,clogin,clogout}}>{children}</AuthContext.Provider>
    
}
