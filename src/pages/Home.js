import styles from "../styles/Home.module.scss";
import CTA from "../components/CTA";
import brand1 from "../images/brands/brand1.svg";
import brand2 from "../images/brands/brand2.svg";
import brand3 from "../images/brands/brand3.svg";
import brand4 from "../images/brands/brand4.svg";
import CustomerCard from "../components/CustomerCard";
import footerImage from "../images/footerImage.svg";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import rocketImage from "../images/logoRocket.svg";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>F</h1>
          <img src={rocketImage} alt="u for futura" />
          <h1>TURA</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>
              Empowering Brands Nationwide. Fueling The
              <br /> Future.
            </h1>
            <p>
              India's Only Space For All <b> Indie Brands </b>To <br />
              Flourish. Find<b> Top-Notch</b> Products Made <br />
              In India To Suit<b> Just What You Need!</b>
            </p>
          </div>
          <div className={styles.right}>
            <CTA
              text="explore"
              style={{ width: "20rem" }}
              onClick={() =>
                navigate("/explore", { state: { activeState: "products" } })
              }
            />
          </div>
        </div>
      </div>

      <section className={styles.brands}>
        <h1>
          OUTSHINING <span>BRANDS</span>
        </h1>
        <div className={styles.brandList}>
          <div className={styles.brand}>
            <img src={brand1} alt="brand1" />
          </div>
          <div className={styles.brand}>
            <img src={brand2} alt="brand1" />
          </div>
          <div className={styles.brand}>
            <img src={brand3} alt="brand1" />
          </div>
          <div className={styles.brand}>
            <img src={brand4} alt="brand1" />
          </div>
        </div>

        <CTA
          style={{
            background: "#F73D93",
            color: "white",
            width: "25%",
          }}
          text="BROWSE NEW BRANDS"
          onClick={() =>
            navigate("/explore", { state: { activeState: "brands" } })
          }
        />
      </section>

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

      <section className={styles.lastFrame}>
        <div className={styles.lastLeft}>
          <img src={footerImage} alt="footer ka kuch toh" />
        </div>
        <div className={styles.lastRight}>
          <h1>
            <span>NURTURING</span> NEW BRANDS
          </h1>
          <h2>SIMPLEX</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus suscipit velit exercitationem possimus asperiores
            voluptatem nihil, iste sit porro modi tenetur, expedita sint iusto
            similique ratione fugiat sequi voluptatibus. Iste commodi fugit
            autem aliquid, incidunt voluptatem dolorem, dicta architecto et nemo
            ducimus enim repellendus quam rerum! Doloribus placeat incidunt qui.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
