import { Navigate } from "react-router-dom";

function Logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("is_admin");
  return <Navigate to="/" />;
}

export default Logout;
