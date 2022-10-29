import styles from "../styles/components/NavBar.module.scss";
import NavItem from "./NavItem";
import Logo from "../images/Logo.svg";

function NavBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="logo" />
      </div>
      <ul>
        <NavItem title="Home" link="/" />
        <NavItem title="About" link="/about" />
        <NavItem title="Seller" link="/seller" />
      </ul>
    </nav>
  );
}

export default NavBar;
