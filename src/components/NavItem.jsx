import styles from "../styles/components/NavItem.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavItem({ title = "Home", link = "#" }) {
  // const location = useLocation();
  const location = window.location.href;
  const url = location.split("#/")[1];
  console.log(location);
  console.log(url);
  return (
    <div className={styles.container}>
      <span className={`${url.includes(link) ? styles.active : ""}`} />
      {/* <span className={`${location.pathname === link ? styles.active : ""}`} /> */}
      <Link to={link}>{title}</Link>
    </div>
  );
}

export default NavItem;
