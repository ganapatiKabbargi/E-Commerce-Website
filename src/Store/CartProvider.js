import React, { useState, useEffect, useCallback } from "react";
import CartContext from "./cartContext";
import axios from "axios";

const CartProvider = (props) => {
  const productArr = [
    {
      title: "T-Shirt",
      price: 599,
      imageUrl:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: "1",
    },
    {
      title: "Shoes",
      price: 999,
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      id: "2",
    },
    {
      title: "Coffee Cup",
      price: 399,
      imageUrl:
        "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMG11Z3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      id: "3",
    },
    {
      title: "HeadPhones",
      price: 2999,
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      id: "4",
    },
    {
      title: "T-Shirt",
      price: 599,
      imageUrl:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: "5",
    },
    {
      title: "Shoes",
      price: 999,
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      id: "6",
    },
    {
      title: "Coffee Cup",
      price: 399,
      imageUrl:
        "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMG11Z3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      id: "7",
    },
    {
      title: "HeadPhones",
      price: 2999,
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      id: "8",
    },
  ];

  const initialToken = localStorage.getItem("token");
  const initialMail = localStorage.getItem("email");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(false);
  const [token, setToken] = useState(initialToken);
  const [Email, setEmail] = useState(initialMail);
  const [note, setNote] = useState(false);
  const [title, setTitle] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const isLogedIn = !!token;

  const getProducts = useCallback(async (email) => {
    const response = await axios.get(
      `https://e-commerce-app-2df47-default-rtdb.firebaseio.com/cart${email}.json`
    );
    const data = await response.data;
    let products = [];
    for (let key in data) {
      products.push({ ...data[key], uId: key });
    }
    setProducts(products);
    console.log(products);
  }, []);

  useEffect(() => {
    getProducts(Email);
  }, [Email, getProducts]);

  const addItemToCartHandler = async (product) => {
    let idx = products.findIndex((ele) => {
      return ele.id === product.id;
    });
    let existingProduct = products[idx];

    if (existingProduct) {
      let pdid = existingProduct.uId;
      console.log(existingProduct);
      existingProduct.quantity = existingProduct.quantity + 1;
      let updatedProduct = { ...existingProduct };
      console.log(updatedProduct);

      const response = await axios.put(
        `https://e-commerce-app-2df47-default-rtdb.firebaseio.com/cart${Email}/${pdid}.json`,
        existingProduct
      );
      if (response.status === 200) {
        getProducts(Email);
      }
    } else {
      const response = await axios.post(
        `https://e-commerce-app-2df47-default-rtdb.firebaseio.com/cart${Email}.json`,
        product
      );
      if (response.status === 200) {
        getProducts(Email);
      }
    }
  };

  const removeItemFromCartHandler = async (id) => {
    let idx = products.findIndex((ele) => {
      return ele.id === id;
    });
    let pd = products[idx];
    let pdid = pd.uId;
    if (pd.quantity === 1) {
      const response = await axios.delete(
        `https://e-commerce-app-2df47-default-rtdb.firebaseio.com/cart${Email}/${pdid}.json`
      );
      if (response.status === 200) {
        getProducts(Email);
      }
    } else {
      pd.quantity = pd.quantity - 1;
      const response = await axios.put(
        `https://e-commerce-app-2df47-default-rtdb.firebaseio.com/cart${Email}/${pdid}.json`,
        pd
      );
      if (response.status === 200) {
        getProducts(Email);
      }
    }
  };

  const removeFromCartHandler = async (id) => {
    let idx = products.findIndex((ele) => {
      return ele.id === id;
    });
    let pd = products[idx];
    let pdid = pd.uId;

    const response = await axios.delete(
      `https://e-commerce-app-2df47-default-rtdb.firebaseio.com/cart${Email}/${pdid}.json`
    );
    if (response.status === 200) {
      getProducts(Email);
    }
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const showCartHandler = () => {
    setCart(true);
  };

  const hideCartHandler = () => {
    setCart(false);
  };

  const addEmailHandler = (email) => {
    setEmail(email);
    localStorage.setItem("email", email);
  };

  const purchaseProductHandler = async () => {
    alert("Thank you for purchasing");
    await axios.delete(
      `https://e-commerce-app-2df47-default-rtdb.firebaseio.com/cart${Email}.json`
    );
    setProducts([]);
  };

  const notificationHandler = (title) => {
    setNote(true);
    setTitle(title);
    const id = setInterval(() => {
      setNote(false);
      clearInterval(id);
    }, 4000);
  };

  const fetchProductHandler = (e) => {
    getProducts(e);
  };

  const showLoader = () => {
    setLoader(true);
  };

  const hideLoader = () => {
    setLoader(false);
  };

  const cartContext = {
    token: token,
    cart: cart,
    isLogedIn: isLogedIn,
    email: Email,
    productArr: productArr,
    products: products,
    note: note,
    title: title,
    loader: loader,
    login: loginHandler,
    logout: logoutHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeFromCart: removeFromCartHandler,
    fetchProduct: fetchProductHandler,
    showCart: showCartHandler,
    hideCart: hideCartHandler,
    addEmail: addEmailHandler,
    purchaseProduct: purchaseProductHandler,
    notification: notificationHandler,
    showLoader: showLoader,
    hideLoader: hideLoader,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
