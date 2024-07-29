import React, {useEffect} from "react";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import EditIssues from "../components/EditIssues";

const IssuesAdmin = () => {
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
        <div>
            <AdminNavbar/>
            <EditIssues/>
        </div>
    );
}

export default IssuesAdmin;