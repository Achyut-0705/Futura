import "./styles/global.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
// import BecomeASeller from "./pages/BecomeASeller";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SellerHome from "./pages/seller/Home";
import Logout from "./pages/Logout";
import Explore from "./pages/Explore";
import Brand from "./pages/Brand";
import ProtectedRoutes from "./components/ProtectedRoutes";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
// import CompanyPreview from "./pages/CompanyPreview";

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

        <Route element={<ProtectedRoutes />}>
          <Route path="logout" element={<Logout />} />
        </Route>

        <Route path="seller" element={<ProtectedRoutes />}>
          <Route path="home" element={<SellerHome />} />
        </Route>

        <Route path="/explore" element={<Explore />} />
        {/* <Route path="/company/preview" element={<CompanyPreview />} /> */}

        <Route path="/brand" element={<Brand />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
