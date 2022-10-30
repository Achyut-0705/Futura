import styles from "../styles/components/NavBar.module.scss";
import NavItem from "./NavItem";
import Logo from "../images/Logo.svg";
import { useLocation } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <nav className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="logo" />
      </div>
      <ul>
        <NavItem title="Home" link="/" isActive={pathname === "/"} />
        <NavItem
          title="About"
          link="/about"
          isActive={pathname.search("/about") !== -1}
        />
        <NavItem
          title="Seller"
          link="/seller"
          isActive={pathname.search("/seller") !== -1}
        />
      </ul>
    </nav>
  );
}

export default NavBar;
