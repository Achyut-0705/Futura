import { useEffect, useState } from "react";
import styles from "../styles/components/ViewProducts.module.scss";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "category 1",
    quantity: 1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "category 2",
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "category 3",
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "category 3",
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "category 3",
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "category 3",
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "category 3",
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "category 3",
    quantity: 1,
  },
];

function ViewProducts({ type = "remove", dataList = products }) {
  const [data, setData] = useState(dataList);

  useEffect(() => {
    setData(dataList);
  }, [dataList]);

  return (
    <div className={styles.container}>
      {data && data.length > 0 ? (
        data.map(({ name, imageURL, description, price, id }, index) => (
          <ProductCard
            name={name}
            description={description}
            price={price}
            type={localStorage.getItem("token") ? type : "view"}
            key={index}
            id={id}
            image={imageURL}
          />
        ))
      ) : (
        <h1>No Products</h1>
      )}
    </div>
  );
}

export default ViewProducts;
