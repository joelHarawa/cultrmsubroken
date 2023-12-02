import {createContext, useEffect, useState} from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const apiUrl = 'http://18.219.147.241:4000';
    const [currentUser, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (inputs) => {
        const response = await axios.post(`${apiUrl}/api/auth/login`, inputs);
        setUser(response.data);
    }

    const logout = async (inputs) => {
        const response = await axios.post("/auth/logout", inputs);
        setUser(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])


    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}