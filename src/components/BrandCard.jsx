import styles from "../styles/components/BrandCard.module.scss";
import brandLogo from "../images/defaultBrandLogo.svg";
import CTA from "./CTA";

function BrandCard() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={brandLogo} alt="Brand Logo" />
      </div>
      <h1>DARJEELING TEA & CO</h1>
      <p>
        India's Only Tea Which Gurantees The Freshness of Freshly Pluched Tea
        Leaves. Darjeeling Tea Brings You the Chai That Will ...
      </p>
      <CTA
        text="explore"
        style={{
          background: "rgba(247, 61, 147, 0.81)",
          color: "white",
          height: "11%",
          fontSize: "1.1em",
        }}
      />
    </div>
  );
}

export default BrandCard;
