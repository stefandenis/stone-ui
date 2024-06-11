import React from 'react';
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProp {
    children: string;
}

function ProtectedRoute(props: any) {
    if (!localStorage.getItem("username")) {
        return <Navigate to="/" replace />;
    }
    return props.children;
}
export default ProtectedRoute;
