import styles from "../styles/Brand.module.scss";
import defaultBrandLogo from "../images/defaultBrandLogo.svg";
import CTA from "../components/CTA";
import ViewProducts from "../components/ViewProducts";
import CustomerCard from "../components/CustomerCard";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import instance from "../utils/axios";
import { useLocation, useNavigate } from "react-router-dom";
import { error } from "../utils/Toasties";

function Brand({ companyId = 1 }) {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const id = localStorage.getItem("id") || location.state?.id || companyId;

  useEffect(() => {
    const getData = async () => {
      try {
        const company = await instance.get(`/company/${id}`);
        const products = await instance.get(`/product/company/${id}`);
        setCompany(company.data.company);
        setProducts(products.data.products);
      } catch (err) {
        error(err.response.data.message);
      }
    };

    getData();
  }, [id]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src={`${(company && company.logoURL) || defaultBrandLogo}`}
            alt="brand logo"
          />
        </div>
        <div className={styles.right}>
          <h1>{company ? company.name : `DARJEELING TEA CO.`}</h1>
          <p>
            {company && company.description
              ? company.description
              : `India's Only Tea Which Gurantees The Freshness of Freshly Pluched
            Tea Leaves. Darjeeling Tea Brings You the Chai That Will Take You
            Back To The Mountains Of Darjeeling. Find Top-Notch Products Made In
            India Ethically To Start Your Morning Just The Way You Want!`}
          </p>
          <CTA
            text="EXPLORE ON THE SHOP"
            style={{
              width: "30%",
              fontSize: "1.2em",
              backgroundColor: "rgba(198, 2, 92, 1)",
              color: "white",
            }}
            onClick={() =>
              navigate("/explore", { state: { activeState: "products" } })
            }
          />
        </div>
      </div>
      <h1>
        OUR <span>PRODUCTS</span>
      </h1>
      <ViewProducts dataList={products} />
      <h1>
        <span>WHY</span> CHOOSE US
      </h1>
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/4rq9JbAAb5I"
          frameBorder="0"
          title="video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <section className={styles.products}>
        <h1>
          <span>CUSTOMERS</span> LOVE IT!
        </h1>
        <div className={styles.productList}>
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Brand;
