import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/seller" />;
}

export default ProtectedRoutes;
