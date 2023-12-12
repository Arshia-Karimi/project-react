import React, { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/product";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div>
      <h1>Your Cart Items</h1>
      <div className="row">
        {PRODUCTS.map((p) => {
          if (cartItems.some((i) => i.id === p.id && i.count > 0))
            return <Product data={p}></Product>;
        })}
      </div>
    </div>
  );
};
export default Cart;
