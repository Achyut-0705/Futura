import styles from "../styles/components/NavItem.module.scss";
import { Link } from "react-router-dom";

function NavItem({ title = "Home", link = "#", isActive = false }) {
  return (
    <div className={styles.container}>
      <span className={`${isActive && styles.active}`} />
      <Link to={link}>{title}</Link>
    </div>
  );
}

export default NavItem;
