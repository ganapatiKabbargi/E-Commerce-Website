import React, { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [products, setProducts] = useState([]);
  const addItemToCartHandler = (product) => {
    let idx = products.findIndex((ele) => {
      return ele.id === product.id;
    });
    let existingProduct = products[idx];
    if (existingProduct) {
      existingProduct.quantity = existingProduct.quantity + 1;
      setProducts([...products]);
    } else {
      setProducts([...products, product]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    let idx = products.findIndex((ele) => {
      return ele.id === id;
    });
    products.splice(idx, 1);
    setProducts([...products]);
  };

  const cartContext = {
    products: products,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
