import "./styles/global.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
// import BecomeASeller from "./pages/BecomeASeller";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SellerHome from "./pages/seller/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="seller">
          <Route path="" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="seller" element={<ProtectedRoutes />}>
          <Route path="home" element={<SellerHome />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
