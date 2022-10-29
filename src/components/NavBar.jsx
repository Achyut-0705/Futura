import styles from "../styles/components/NavBar.module.scss";
import NavItem from "./NavItem";
import Logo from "../images/Logo.svg";
// import { useState } from "react";

function NavBar() {
  // const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="logo" />
      </div>
      {/* <div
        className={`${styles.hamburger} ${navbarOpen ? styles.open : ""}`}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div> */}
      <ul>
        <NavItem title="Home" link="/" />
        <NavItem title="About" link="/about" />
        <NavItem title="Become A Seller" link="/seller" />
      </ul>
    </nav>
  );
}

export default NavBar;
