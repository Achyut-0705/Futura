import styles from "../styles/Home.module.scss";
import CTA from "../components/CTA";
import brand1 from "../images/brands/brand1.svg";
import brand2 from "../images/brands/brand2.svg";
import brand3 from "../images/brands/brand3.svg";
import brand4 from "../images/brands/brand4.svg";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>
              Empowering Brands Nationwide. Fueling The
              <br /> Future.
            </h1>
            <h2>
              India's Only Space For All <b>Indie Brands </b>To <br />
              Flourish. Find <b>Top-Notch </b>Products Made <br />
              In India To Suit <b>Just What You Need!</b>
            </h2>
          </div>
          <div className={styles.right}>
            <CTA text="explore" />
          </div>
        </div>
      </div>

      <div className={styles.brands}>
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
      </div>
    </>
  );
}

export default Home;
