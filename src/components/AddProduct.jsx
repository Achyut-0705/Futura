import styles from "../styles/components/AddProduct.module.scss";
import CustomInput from "./CustomInput";
import CTA from "./CTA";
import uploadIcon from "../images/uploadIcon.svg";
// import CustomInput from "../../components/CustomInput";

function AddProduct({
  props: {
    handleSubmit,
    inputRef,
    setImage,
    image,
    price,
    setName,
    setPrice,
    description,
    setDescription,
    product,
    name,
  },
}) {
  return (
    <div className={styles.addProduct}>
      <form onSubmit={handleSubmit}>
        <div className={styles.top}>
          <div
            className={styles.input}
            onClick={() => inputRef.current.click()}
          >
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <img src={uploadIcon} alt="upload icon" />
            <span>{image ? image.name : "Upload Image"}</span>
          </div>
        </div>
        <div className={styles.bottom}>
          <CustomInput
            label="Item Name"
            placeholder="Product Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            label="Price"
            placeholder="Rs. 999"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <CustomInput
            label="Description"
            placeholder="Best comfort that can be found"
            text="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <CTA
            text="Preview"
            style={{ background: "rgba(198, 2, 92, 1)", color: "white" }}
            type="submit"
          />
        </div>
      </form>
      <div className={styles.preview}>
        <h1>Preview</h1>
        {product}
        {/* <ProductCard type="add" /> */}
      </div>
    </div>
  );
}

export default AddProduct;
