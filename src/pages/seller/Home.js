import styles from "../../styles/Seller.module.scss";
import defaultBrandLogo from "../../images/defaultBrandLogo.svg";
import CTA from "../../components/CTA";
import { useRef, useState } from "react";
// import uploadIcon from "../../images/uploadIcon.svg";
// import CustomInput from "../../components/CustomInput";
import ProductCard from "../../components/ProductCard";
import { error, info, success } from "../../utils/Toasties";
import instance from "../../utils/axios";
import ViewProducts from "../../components/ViewProducts";
import AddProduct from "../../components/AddProduct";
import { useEffect } from "react";
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
  const [company, setCompany] = useState(null);
  const [products, setProducts] = useState([]);

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
        image={URL.createObjectURL(image)}
        name={name}
        price={price}
        description={description}
        onClick={() => addProduct(data)}
      />
    );
  };

  useEffect(() => {
    const getCompanyData = async () => {
      try {
        const res = await instance.get("/company/token/company");
        setCompany(res.data.company);
      } catch (err) {
        error(err.message);
      }
    };
    getCompanyData();
  }, []);

  useEffect(() => {
    if (activeBtn !== "view") return;
    const getProducts = async () => {
      try {
        const res = await instance.get(`/product/company/${company.id}`);
        setProducts(res.data.products);
      } catch (err) {
        error(err.message);
      }
    };
    getProducts();
  }, [activeBtn]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src={`${
              company && company.logoURL ? company.logoURL : defaultBrandLogo
            }`}
            alt="brand logo"
          />
        </div>
        <div className={styles.right}>
          <h1>{company ? company.name : "DARJEELING TEA CO."}</h1>
          <p>
            {company && company.description
              ? company.description
              : "India's Only Tea Which Gurantees The Freshness of Freshly Pluched Tea Leaves. Darjeeling Tea Brings You the Chai That Will Take You Back To The Mountains Of Darjeeling. Find Top-Notch Products Made In India Ethically To Start Your Morning Just The Way You Want!"}
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
          <AddProduct
            props={{
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
            }}
          />
        ) : (
          <ViewProducts dataList={products} />
        )}
      </div>
    </>
  );
}

export default Home;
