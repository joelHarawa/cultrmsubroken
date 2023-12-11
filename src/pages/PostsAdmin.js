import React, {useEffect} from "react";
import NewComponent from "../components/NewComponent";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

const PostsAdmin = () => {
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
            <NewComponent/>
        </div>
    );
}

export default PostsAdmin;