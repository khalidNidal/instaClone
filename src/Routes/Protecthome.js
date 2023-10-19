import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  }
  return <Navigate to="/signin" />;
}

export default Protected;
