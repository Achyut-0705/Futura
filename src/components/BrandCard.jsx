import styles from "../styles/components/BrandCard.module.scss";
import brandLogo from "../images/defaultBrandLogo.svg";
import CTA from "./CTA";

function BrandCard({
  name = "DARJEELING TEA & CO",
  description = "Darjeeling Tea & Co. is a tea company based in Darjeeling, India. We are a family owned business that has been in the tea industry for over 100 years. We are passionate about tea and we are committed to providing the best quality tea to our customers.",
  logo = brandLogo,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={logo} alt="Brand Logo" />
      </div>
      <h1>{name}</h1>
      <p>{description}</p>
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
