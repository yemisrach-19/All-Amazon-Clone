import React from "react";
import { categoryInfos } from "./categoryCollection.JS";
import Categorycard from "./Categorycard";
import classes from "./Category.module.css";

function Category() {
  return (
    <div>
      <div className={classes.category_container}>
        {categoryInfos.map((infos) => (
          <Categorycard key={infos.id} data={infos} />
        ))}
      </div>
    </div>
  );
}

export default Category;
