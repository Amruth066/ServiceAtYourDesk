import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("user"); // Check if user is logged in

  return isAuthenticated ? element : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
