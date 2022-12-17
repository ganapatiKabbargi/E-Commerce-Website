import React from "react";

const CartContext = React.createContext({
  productArr: [],
  products: [],
  token: "",
  isLogedIn: false,
  login: (token) => {},
  logout: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
