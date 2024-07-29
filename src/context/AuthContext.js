/*
Title: AuthContext.js
Author: Joel Harawa
Purpose: Create context to handle user state for admin and regular users
*/

import {createContext, useEffect, useState} from "react";
import axios from "axios";
export const AuthContext = createContext();

// Define Authentication Context Provider
export const AuthContextProvider = ({children}) => {

    // Initialize user and admin states
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(null);
    const apiUrl = 'https://18.219.147.241';

    // Get regular user profile data from backend
    const getProfile = async () => {
        try {
            const apiUrl = 'https://18.219.147.241';
            const token = window.localStorage.getItem("jwt");
            const response = await axios.post(
                `${apiUrl}/api/get/profile`, {jwt: token}
            );
            setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // Get regular admin profile data from backend
    const getAdminProfile = async () => {
        try {
            const apiUrl = 'https://18.219.147.241';
            const token = window.localStorage.getItem("jwt");
            const response = await axios.post(
                `${apiUrl}/api/get/adminProfile`, {jwt: token}
            );
            setAdmin(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // Send inputs from user registration page to backend
    const signup = async (inputs) => {
        const response = await axios.post(`${apiUrl}/api/auth/signup`, inputs);
    }

    // Send inputs from user login page to backend
    const login = async (inputs) => {
        const response = await axios.post(`${apiUrl}/api/auth/login`, inputs);
        window.localStorage.setItem("jwt", response.data.message);
        console.log(response);
    }

    // Logout the current user
    const logout = async (inputs) => {
        setUser(null);
    }
    // Send inputs from user registration page to backend
    const adminSignup = async (inputs) => {
        const response = await axios.post(`${apiUrl}/api/auth/adminSignup`, inputs);
    }

    // Send inputs from user login page to backend
    const adminLogin = async (inputs) => {
        const response = await axios.post(`${apiUrl}/api/auth/adminLogin`, inputs);
        window.localStorage.setItem("jwt", response.data.message);
        console.log(response);
    }

    // Logout the current user
    const adminLogout = async (inputs) => {
        setAdmin(null);
    }

    return (
        <AuthContext.Provider value={{
            adminLogin,
            adminLogout,
            adminSignup,
            login,
            logout,
            signup,
            getProfile,
            getAdminProfile,
            user,
            admin
            }}>
            {children}
        </AuthContext.Provider>
    );
}