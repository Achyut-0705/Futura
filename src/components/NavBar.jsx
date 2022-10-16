import styles from "../styles/NavBar.module.scss";
import NavItem from "./NavItem";
import Logo from "../images/Logo.svg";
import { useState } from "react";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="logo" />
      </div>
      <div
        class={`${styles.hamburger} ${navbarOpen ? styles.open : ""}`}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <span class={styles.bar}></span>
        <span class={styles.bar}></span>
        <span class={styles.bar}></span>
      </div>
      <ul>
        <NavItem title="Home" link="/" />
        <NavItem title="About" link="/about" />
        <NavItem title="Become A Seller" link="/seller" />
      </ul>
    </nav>
  );
}

export default NavBar;
