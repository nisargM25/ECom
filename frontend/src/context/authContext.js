import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    
    const vlogin = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/vlogin", inputs);
        setCurrentUser(res.data)
    }

    const clogin = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/clogin", inputs);
        setCurrentUser(res.data)
    }



    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser])


    const vlogout = async (inputs) => {
        await axios.post("http://localhost:8800/api/auth/vlogout");
        setCurrentUser(null)
    }
    const clogout = async (inputs) => {
        await axios.post("http://localhost:8800/api/auth/clogout");
        setCurrentUser(null)
    }
    return <AuthContext.Provider value={{currentUser,vlogin,vlogout,clogin,clogout}}>{children}</AuthContext.Provider>
    
}
