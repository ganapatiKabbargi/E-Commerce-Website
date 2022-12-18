import React, { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductPage from "./Components/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Login";
import CartContext from "./Store/cartContext";
import Notification from "./Components/UI/Modal/Notification";

function App() {
  const cartCtx = useContext(CartContext);
  const isLogedIn = cartCtx.isLogedIn;

  const userDetailSubmitHandler = (user) => {
    fetch(
      "https://react-http-practice-8c294-default-rtdb.firebaseio.com/userDetails.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div>
      {cartCtx.note && <Notification></Notification>}
      {cartCtx.cart && <Cart></Cart>}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact userDetail={userDetailSubmitHandler}></Contact>
        </Route>

        <Route path="/store">
          {isLogedIn && <ProductPage></ProductPage>}
          {!isLogedIn && <Redirect to="/login"></Redirect>}
        </Route>

        <Route path="/product_detail/:productId">
          <ProductDetail></ProductDetail>
        </Route>
        {!isLogedIn && (
          <Route path="/login">
            <Login></Login>
          </Route>
        )}
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
