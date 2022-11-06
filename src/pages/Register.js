import { useRef, useState } from "react";
import styles from "../styles/Register.module.scss";
import uploadIcon from "../images/uploadIcon.svg";
import CustomInput from "../components/CustomInput";
import CTA from "../components/CTA";
import { error, info, success } from "../utils/Toasties";
import instance from "../utils/axios";

function Register() {
  const [logo, setLogo] = useState(null);
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [banner, setBanner] = useState("");
  const inputRef = useRef(null);
  const bannerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!logo) {
      error("Please upload a logo");
      return;
    }
    if (brandName === "") {
      error("Please enter a brand name");
      return;
    }
    if (email === "") {
      error("Please enter an email");
      return;
    }
    if (password === "") {
      error("Please enter a password");
      return;
    }
    if (confirmPassword === "") {
      error("Please confirm your password");
      return;
    }
    if (address === "") {
      error("Please enter an address");
      return;
    }
    if (password !== confirmPassword) {
      error("Passwords do not match");
      return;
    }
    if (description === "") {
      error("Please enter a description");
      return;
    }
    if (!banner) {
      error("Please upload a banner");
      return;
    }

    info("Registering...");

    const myFormData = new FormData();
    myFormData.append("logo", logo);
    myFormData.append("name", brandName);
    myFormData.append("email", email);
    myFormData.append("password", password);
    myFormData.append("description", description);
    myFormData.append("address", address);
    myFormData.append("banner", banner);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    instance
      .post("/company", myFormData, config)
      .then((res) => {
        success("Registered successfully");
      })
      .catch((err) => {
        error(err.response.data.message);
      });
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div
            className={styles.input}
            onClick={() => inputRef.current.click()}
          >
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              // value={logo}
              onChange={(e) => setLogo(e.target.files[0])}
            />
            <img src={uploadIcon} alt="upload icon" />
            <span>{logo ? logo.name : "Upload Image"}</span>
          </div>
          <div className={styles.headers}>
            <h1>First Things First.</h1>
            <p>
              Start by creating an account, and providing your brand's basic
              info to help us
              <br /> set up an account for you.
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <form onSubmit={handleSubmit}>
            <div className={styles.leftForm}>
              <CustomInput
                label="Brand Name"
                placeholder="Example Brand"
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
              <CustomInput
                label="email"
                placeholder="example@company.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CustomInput
                label="password"
                placeholder="**************"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <CustomInput
                label="Confirm Password"
                placeholder="**************"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className={styles.rightForm}>
              <CustomInput
                label="Address"
                placeholder="xyz street, abc city, 123456"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className={styles.textAreaWrapper}>
                <label>Description</label>
                <textarea
                  placeholder="A short description to go on the way"
                  rows="8"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div
                className={styles.bannerInputWrapper}
                onClick={(e) => bannerRef.current.click()}
              >
                <label>{banner ? banner.name : "Upload Banner"}</label>
                <input
                  type="file"
                  ref={bannerRef}
                  onChange={(e) => setBanner(e.target.files[0])}
                />
              </div>

              <CTA
                text="submit"
                style={{
                  backgroundColor: "#C6025C",
                  color: "white",
                  height: "12%",
                  fontSize: "1.5em",
                  // padding: "0",
                }}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
