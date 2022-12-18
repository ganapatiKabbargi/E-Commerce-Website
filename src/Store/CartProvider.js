import React, { useState, useEffect } from "react";
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
  const initialMail = localStorage.getItem("email");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(false);
  const [token, setToken] = useState(initialToken);
  const [Email, setEmail] = useState(initialMail);
  const [note, setNote] = useState(false);
  const [title, setTitle] = useState("");

  const getProducts = async () => {
    const response = await fetch(
      `https://crudcrud.com/api/8ad0f1c6194a4d94815fe89a3e903c77/cart${Email}`
    );
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const isLogedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const cartOpenHandler = () => {
    setCart(true);
  };

  const cartCloseHandler = () => {
    setCart(false);
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
      fetch(
        `https://crudcrud.com/api/8ad0f1c6194a4d94815fe89a3e903c77/cart${Email}`,
        {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        getProducts();
      });
    }
  };

  const removeItemFromCartHandler = (id) => {
    let idx = products.findIndex((ele) => {
      return ele.id === id;
    });
    let pd = products[idx];
    let pdid = pd._id;
    fetch(
      `https://crudcrud.com/api/8ad0f1c6194a4d94815fe89a3e903c77/cart${Email}/${pdid}`,
      { method: "DELETE" }
    ).then((response) => {
      // getProducts();
    });

    products.splice(idx, 1);
    setProducts([...products]);
  };

  const addEmailHandler = (email) => {
    setEmail(email);
    localStorage.setItem("email", email);
  };

  const purchaseHandler = () => {
    alert("Thank you for purchasing");
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

  const cartContext = {
    token: token,
    cart: cart,
    isLogedIn: isLogedIn,
    email: Email,
    productArr: productArr,
    products: products,
    note: note,
    title: title,
    login: loginHandler,
    logout: logoutHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    cartOpen: cartOpenHandler,
    cartClose: cartCloseHandler,
    addEmail: addEmailHandler,
    purchase: purchaseHandler,
    notification: notificationHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
