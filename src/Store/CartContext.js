import React from "react";

const CartContext = React.createContext({
  products: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
