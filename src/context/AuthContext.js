import {createContext, useEffect, useState} from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const apiUrl = 'https://18.219.147.241';

    const signup = async (inputs) => {
        const response = await axios.post(`${apiUrl}/api/auth/signup`, inputs);
    }

    const login = async (inputs) => {
        const response = await axios.post(`${apiUrl}/api/auth/login`, inputs);
        console.log(response);
    }

    const logout = async (inputs) => {
        const response = await axios.post("api/auth/logout", inputs);
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{login, logout, signup}}>
            {children}
        </AuthContext.Provider>
    );
}