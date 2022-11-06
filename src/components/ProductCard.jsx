import styles from "../styles/components/ProductCard.module.scss";
import productImage from "../images/productItem.svg";
import instance from "../utils/axios";
import { success, error, info } from "../utils/Toasties";

function ProductCard({
  type = "remove",
  name = "Chapri Crocs",
  price = 3000,
  image = productImage,
  description = "Are you one rich brat? consider these crocs",
  onClick = () => {},
  id,
}) {
  const handleDelete = () => {
    info("Deleting product...");
    const deleteProduct = async () => {
      try {
        await instance.delete(`/product/${id}`);
        success("Product deleted successfully");
      } catch (err) {
        error("Error deleting product");
      }
    };
    deleteProduct();
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Product" />
        {type === "remove" && (
          <button className={styles.removeBtn} onClick={handleDelete}>
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
