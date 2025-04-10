import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
}
