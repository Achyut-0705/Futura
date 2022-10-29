import styles from "../styles/components/CustomerCard.module.scss";
import CustomerImage from "../images/customerImage.svg";

function CustomerCard() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={CustomerImage} alt="Customer" />
      </div>
      <p>
        Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem dolor sit
        amet lorem ispum
      </p>
      <span>No One, Delhi</span>
    </div>
  );
}

export default CustomerCard;
