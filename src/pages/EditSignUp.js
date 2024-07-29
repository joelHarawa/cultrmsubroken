import React, {useEffect} from "react";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import SignUp from "../components/SignUp";

const EditLogin = () => {
    const {admin, getAdminProfile} = useContext(AuthContext);
    useEffect(() => {
        getAdminProfile();
    }, []);
    const navigate = useNavigate();
    console.log(admin)
    if (!admin) {
        navigate("/adminLogin");
    }

    if (!admin) {
        return null;
    }

    return (
        <div>
            <AdminNavbar/>
            <SignUp/>
        </div>
    );
}

export default EditLogin;