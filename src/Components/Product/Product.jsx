import React, { useEffect, useState } from "react";
import axios from "axios";
import Productcard from "./Productcard";
import classes from './Product.module.css'

const Product = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={classes.products_container}>
      {Products.map((singleProduct) => {
        return <Productcard product={singleProduct} key={singleProduct.id} />;
      })}
    </section>
  );
};

export default Product;
