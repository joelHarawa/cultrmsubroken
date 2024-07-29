import React, {useEffect} from "react";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Login from "../components/Login";

const EditLogin = () => {
    const {admin, getAdminProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        getAdminProfile();
        if (!admin) {
            navigate("/adminLogin");
        }
    }, []);
    
    console.log(admin)
    

    if (!admin) {
        return null;
    }

    return (
        <div>
            <AdminNavbar/>
            <Login/>
        </div>
    );
}

export default EditLogin;