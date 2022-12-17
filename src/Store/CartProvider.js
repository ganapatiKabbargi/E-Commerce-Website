import React, { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const productArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      id: "1",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      id: "2",
    },
    {
      title: "Yellow and Black Color",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      id: "3",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      id: "4",
    },
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      id: "5",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      id: "6",
    },
  ];
  const initialToken = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(initialToken);

  const isLogedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

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
    token: token,
    isLogedIn: isLogedIn,
    login: loginHandler,
    logout: logoutHandler,
    productArr: productArr,
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
