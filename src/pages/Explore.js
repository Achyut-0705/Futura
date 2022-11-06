import styles from "../styles/Explore.module.scss";
import CTA from "../components/CTA";
import { useState, useEffect } from "react";
import ViewProducts from "../components/ViewProducts";
import ViewBrands from "../components/ViewBrands";
import instance from "../utils/axios";
import { useLocation } from "react-router-dom";

function Explore() {
  const location = useLocation();
  const [activeBtn, setActiveBtn] = useState(
    location.state?.activeState || "brands"
  );

  console.log(location.state.activeState);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = activeBtn === "brands" ? "/company" : "/product";
    instance
      .get(url)
      .then((res) => {
        setData(
          activeBtn === "brands" ? res.data.companies : res.data.products
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [activeBtn]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.btns}>
          <CTA
            text="Brands"
            style={{
              backgroundColor:
                activeBtn === "brands"
                  ? "rgba(247, 61, 147, 1)"
                  : "rgba(255, 255, 255, 0.22)",
              color: "white",
              fontSize: "1.1em",
            }}
            onClick={() => setActiveBtn("brands")}
          />
          <CTA
            text="Products"
            style={{
              backgroundColor:
                activeBtn === "products"
                  ? "rgba(247, 61, 147, 1)"
                  : "rgba(255, 255, 255, 0.22)",
              color: "white",
              fontSize: "1.1em",
            }}
            onClick={() => setActiveBtn("products")}
          />
        </div>
        <div className={styles.searchWrapper}>
          <input type="search" placeholder="Search" autoFocus />
        </div>
        <div className={styles.cartWrapper}>Cart</div>
      </div>
      <div className={styles.content}>
        {activeBtn === "brands" ? (
          <ViewBrands dataList={data} />
        ) : (
          <ViewProducts type="add" dataList={data} />
        )}
      </div>
    </div>
  );
}

export default Explore;