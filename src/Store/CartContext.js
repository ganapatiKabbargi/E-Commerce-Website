import React from "react";

const CartContext = React.createContext({
  productArr: [],
  products: [],

  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
