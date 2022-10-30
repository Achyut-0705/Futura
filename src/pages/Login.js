import CustomInput from "../components/CustomInput";
import styles from "../styles/Login.module.scss";
import CTA from "../components/CTA";
import { useState } from "react";
import { Link } from "react-router-dom";
import { error, success } from "../utils/Toasties";
import { ToastContainer } from "react-toastify";
import instance from "../utils/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      error("Please fill in all fields");
      return;
    }
    try {
      const {
        data: { token, is_admin },
      } = await instance.post("auth/login/company", {
        email,
        password,
      });
      success("Login successful");
      localStorage.setItem("token", token);
      localStorage.setItem("is_admin", is_admin);
    } catch (err) {
      if (err.message === "timeout of 3000ms exceeded") {
        error("Network error");
        return;
      }
      error("Invalid credentials");
      console.log(err);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headers}>
          <h1>SIGN IN/REGISTER INTO YOUR </h1>
          <h1>SELLER ACCOUNT</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <CustomInput
            label="Email"
            autoFocus
            placeholder="example@company.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            label="Password"
            placeholder="******"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <CTA
            style={{ width: "70%", background: "#C6025C", color: "white" }}
            text="submit"
            type="submit"
          />
          <p>
            Not A Member? Click Here To{" "}
            <Link to="/seller/register">Register</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
