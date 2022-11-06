import { useEffect, useState } from "react";
import styles from "../styles/components/ViewBrands.module.scss";
import BrandCard from "./BrandCard";

function ViewBrands({ dataList = [] }) {
  const [data, setData] = useState(dataList);

  useEffect(() => {
    setData(dataList);
  }, [dataList]);

  return (
    <div className={styles.container}>
      {data.length > 0 ? (
        data.map(({ id, name, description, logoURL }) => (
          <BrandCard
            key={id}
            name={name}
            description={description}
            logo={logoURL}
            id={id}
          />
        ))
      ) : (
        <h1>No Brands</h1>
      )}
    </div>
  );
}

export default ViewBrands;
