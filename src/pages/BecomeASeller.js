import styles from "../styles/BecomeASeller.module.scss";
import uIcon from "../images/logoRocket.svg";
import CTA from "../components/CTA";

function BecomeASeller() {
  return (
    <div className={styles.container}>
      <div className={styles.futura}>
        <h1>F</h1>
        <img src={uIcon} alt="u icon" />
        <h1>tura</h1>
      </div>
      <h2>
        BE A PART OF THE<span> FUTURE !</span>
      </h2>

      <CTA
        text="LAUNCH YOUR BRAND NOW"
        style={{
          backgroundColor: "rgba(198, 2, 92, 1)",
          color: "white",
          width: "30%",
        }}
      />
    </div>
  );
}

export default BecomeASeller;
