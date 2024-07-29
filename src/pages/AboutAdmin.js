import React, {useEffect} from "react";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import EditAbout from "../components/EditAbout";

const AboutAdmin = () => {
    const {admin} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(admin)
        if (!admin) {
            navigate("/adminLogin");
        }
    });

    if (!admin) {
        return null;
    }

    return (
        <EditAbout/>
    );
}

export default AboutAdmin;