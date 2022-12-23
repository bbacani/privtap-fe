import React from "react";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({
                            authenticated,
                            redirectPath = '/',
                            children,
                        }) => {
    if (authenticated === false) {
        return <Navigate to={redirectPath} replace />;
    }
    return children;
};

export default ProtectedRoute;