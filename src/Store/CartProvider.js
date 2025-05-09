import React, { useState, useEffect, useCallback } from "react";
import CartContext from "./CartContext";
import axios from "axios";

const CartProvider = (props) => {
  const productArr = [
    {
      title: "Roadster",
      price: 599,
      imageUrl:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: "1",
      colors: "Size XS,S,M,L,XL",
    },
    {
      title: "NIKE Shoe",
      price: 999,
      imageUrl:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      id: "2",
      colors: "Black,White",
    },
    {
      title: "Coffee Cup",
      price: 399,
      imageUrl:
        "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMG11Z3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      id: "3",
      colors: "Black",
    },
    {
      title:
        "boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge Bluetooth Headset  (Sage Green, On the Ear)",
      price: 2999,
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      id: "4",
      colors: "Black,White",
    },
    {
      title: "CHANEL(50ml)",
      price: 599,
      imageUrl:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZnVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      id: "5",
      colors: "Black",
    },
    {
      title: "Lakmé Forever Matte Liquid Lip Colour ",
      price: 399,
      imageUrl:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      id: "6",
      colors: "All shades",
    },
    {
      title: "Ultra Hydrating Moisturizer",
      price: 499,
      imageUrl:
        "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vaXN0dXJpemVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: "7",
      colors: "Blue",
    },
    {
      title: "Lakmé Eyeconic Liquid Eyeliner 4.5 ml  (Black)",
      price: 299,
      imageUrl:
        "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXllbGluZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      id: "8",
      colors: "Black",
    },
    {
      title: "Smart Watch",
      price: 2999,
      imageUrl:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      id: "9",
      colors: "Black",
    },
    {
      title: "APPLE airpodes Pro",
      price: 3999,
      imageUrl:
        "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVhcnBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      id: "10",
      colors: "White",
    },
    {
      title:
        "JBL Flip Essential IPX7 Waterproof 16 W Bluetooth Speaker  (Grey, Stereo Channel)",
      price: 2499,
      imageUrl:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: "11",
      colors: "Black",
    },
    {
      title: "GoPro Hero11 Waterproof Sports and Action Camera  (Black, 23 MP)",
      price: 39999,
      imageUrl:
        "https://images.unsplash.com/photo-1625420055396-d61b846ce03c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z28lMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      id: "12",
      colors: "Black",
    },
    {
      title: "Chair",
      price: 1999,
      imageUrl:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: "13",
      colors: "Black,White",
    },
    {
      title: "Sofa",
      price: 2999,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: "14",
      colors: "wooden Color",
    },
    {
      title: "Pendant Lamp",
      price: 3999,
      imageUrl:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      id: "15",
      colors: "Black,White",
    },
    {
      title: "Laptop Table",
      price: 4999,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664193968929-d9d9544296e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      id: "16",
      colors: "Black,Wood color",
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

  const isLogedIn = !!token;

  const getProducts = useCallback(async (email) => {
    const response = await axios.get(
      `https://e-commerce-store-effda-default-rtdb.firebaseio.com/cart${email}.json`
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
        `https://e-commerce-store-effda-default-rtdb.firebaseio.com/cart${Email}/${pdid}.json`,
        existingProduct
      );
      if (response.status === 200) {
        getProducts(Email);
      }
    } else {
      const response = await axios.post(
        `https://e-commerce-store-effda-default-rtdb.firebaseio.com/cart${Email}.json`,
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
        `https://e-commerce-store-effda-default-rtdb.firebaseio.com/cart${Email}/${pdid}.json`
      );
      if (response.status === 200) {
        getProducts(Email);
      }
    } else {
      pd.quantity = pd.quantity - 1;
      const response = await axios.put(
        `https://e-commerce-store-effda-default-rtdb.firebaseio.com/cart${Email}/${pdid}.json`,
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
      `https://e-commerce-store-effda-default-rtdb.firebaseio.com/cart${Email}/${pdid}.json`
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
      `https://e-commerce-store-effda-default-rtdb.firebaseio.com/cart${Email}.json`
    );
    setProducts([]);
  };

  const notificationHandler = (title) => {
    setNote(true);
    setTitle(title);
    const id = setInterval(() => {
      setNote(false);
      clearInterval(id);
    }, 2000);
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
