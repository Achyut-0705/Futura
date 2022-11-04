import styles from "../styles/components/ProductCard.module.scss";
import productImage from "../images/productItem.svg";

function ProductCard({
  type = "remove",
  name = "Chapri Crocs",
  price = 3000,
  image = productImage,
  description = "Are you one rich brat? consider these crocs",
  onClick = () => {},
}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Product" />
        {type === "remove" && (
          <button className={styles.removeBtn} onClick={onClick}>
            x
          </button>
        )}
      </div>
      <div className={styles.infoContainer}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.priceContainer}>
          <p className={styles.price}>&#8377; {price}</p>
        </div>
        {type === "add" && (
          <button className={styles.addBtn} onClick={onClick}>
            +
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
