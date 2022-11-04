import styles from "../../styles/Seller.module.scss";
import defaultBrandLogo from "../../images/defaultBrandLogo.svg";
import CTA from "../../components/CTA";
import { useRef, useState } from "react";
import uploadIcon from "../../images/uploadIcon.svg";
import CustomInput from "../../components/CustomInput";
import ProductCard from "../../components/ProductCard";
import { error, info, success } from "../../utils/Toasties";
import instance from "../../utils/axios";
// import axios from "axios";

function Home() {
  const addProduct = async (data) => {
    info("Adding product, please wait...");
    try {
      instance.defaults.headers["Content-Type"] = "multipart/form-data";
      const res = await instance.post("/product", data);
      if (res.status === 201) {
        success("Product added successfully");
      }
    } catch (err) {
      error(err.message);
    }
  };
  const [activeBtn, setActiveBtn] = useState("add");
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState(<ProductCard type="add" />);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      error("Please upload an image");
      return;
    }

    if (!name) {
      error("Please enter a name");
      return;
    }

    if (!price) {
      error("Please enter a price");
      return;
    }

    if (!description) {
      error("Please enter a description");
      return;
    }

    const data = new FormData();
    data.append("image", image);
    data.append("name", name);
    data.append("price", price);
    data.append("description", description);

    setProduct(
      <ProductCard
        type="add"
        image={image}
        name={name}
        price={price}
        description={description}
        onClick={() => addProduct(data)}
      />
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={defaultBrandLogo} alt="brand logo" />
        </div>
        <div className={styles.right}>
          <h1>DARJEELING TEA CO.</h1>
          <p>
            India's Only Tea Which Gurantees The Freshness of Freshly Pluched
            Tea Leaves. Darjeeling Tea Brings You the Chai That Will Take You
            Back To The Mountains Of Darjeeling. Find Top-Notch Products Made In
            India Ethically To Start Your Morning Just The Way You Want!
          </p>
        </div>
      </div>
      <div className={styles.btns}>
        <CTA
          text="ADD A PRODUCT"
          style={{
            backgroundColor: activeBtn === "add" && "rgba(247, 61, 147, 1)",
            color: activeBtn === "add" && "white",
          }}
          onClick={() => setActiveBtn("add")}
        />
        <CTA
          text="VIEW ALL PRODUCTS"
          style={{
            backgroundColor: activeBtn === "view" && "rgba(247, 61, 147, 1)",
            color: activeBtn === "view" && "white",
          }}
          onClick={() => setActiveBtn("view")}
        />
      </div>
      <div className={styles.products}>
        {activeBtn === "add" ? (
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
        ) : (
          <div className={styles.viewProduct}></div>
        )}
      </div>
    </>
  );
}

export default Home;
