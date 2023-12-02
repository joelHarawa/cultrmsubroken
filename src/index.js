import React from "react";
import App from "./App"
import ReactDom from "react-dom";
import {AuthContextProvider} from "./context/AuthContext";

ReactDom.render (
    <React.StrictMode>
        <AuthContextProvider>
            <App/>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);