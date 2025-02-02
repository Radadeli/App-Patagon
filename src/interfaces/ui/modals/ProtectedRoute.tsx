import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "/Users/ramir/OneDrive/Desktop/Viajes Patagon Crypto/App/App Patagon/src/interfaces/auth/AuthProvider";

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
}
