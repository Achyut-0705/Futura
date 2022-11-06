import styles from "../styles/components/NavBar.module.scss";
import NavItem from "./NavItem";
import Logo from "../images/Logo.svg";
// import CTA from "./CTA";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <nav className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="logo" onClick={() => navigate("/")} />
      </div>
      <ul>
        {!token ? (
          <>
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
          </>
        ) : (
          <div className={styles.btnWrapper}>
            <NavItem
              title="Home"
              link="/seller/home"
              isActive={pathname.search("/home") !== -1}
            />
            <NavItem
              title="Preview your landing page"
              link="/brand"
              isActive={pathname.search("/brand") !== -1}
            />
            <NavItem
              title="Logout"
              link="/logout"
              isActive={pathname.search("/logout") !== -1}
            />
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
