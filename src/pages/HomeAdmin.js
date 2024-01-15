import React, {useEffect} from "react";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import ComingSoon from "../components/ComingSoon";
import EditHomeVideo from "../components/EditHomeVideo";

const HomeAdmin = () => {
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(currentUser)
        if (!currentUser) {
            navigate("/login");
        }
    });

    if (!currentUser) {
        return null;
    }

    return (
        <div>
            <AdminNavbar/>
            <EditHomeVideo/>
        </div>
    );
}

export default HomeAdmin;