import React, {useEffect} from "react";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import ComingSoon from "../components/ComingSoon";

const GetInvolvedAdmin = () => {
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
            <ComingSoon/>
        </div>
    );
}

export default GetInvolvedAdmin;
