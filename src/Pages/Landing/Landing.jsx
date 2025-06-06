import React from "react";
import Category from "../../Components/Category/Category";
import Carousel from "../../Components/Carousel/Carousel";
import Product from "../../Components/Product/Product";
import Layout from "../../Components/Layout/Layout";

const Landing = () => {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
};

export default Landing;
