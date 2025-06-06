import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormater from "../CurrencyFormatter/CurrencyFormater";
import classes from './Product.module.css'
const Productcard = ({product}) => {
  const { id, image, title, rating, price } = product;
  return (
    <div className={`${classes.card__container}`}>
      <a href="">
        <img src={image} alt="" />
      </a>

      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          */rating*/
          <Rating value={rating.rate} perecision={0.1} />
          {/* {price} */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* {price}  */}
          <CurrencyFormater amount={price} />
        </div>
        <button className={classes.button}> add to cart</button>
      </div>
    </div>
  );
};

export default Productcard;
