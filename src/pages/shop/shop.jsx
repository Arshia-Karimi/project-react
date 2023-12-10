import React from "react";
import Product from "./product.js";
import { PRODUCTS } from "../../data/products";

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <div className="row">
        {PRODUCTS.map((productDate) => {
          return <Product key={productDate.id} data={productDate} />;
        })}
      </div>
    </div>
  );
};
export default Shop;
