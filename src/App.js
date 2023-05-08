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
import ErrorModal from "./Components/UI/Modal/ErrorModal";
import axios from "axios";
import NavigationBar from "./Components/Navbar/Navbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "./Components/UI/Modal/Modal";

function App() {
  const cartCtx = useContext(CartContext);
  const isLogedIn = cartCtx.isLogedIn;
  const history = useHistory();

  const userDetailSubmitHandler = (user) => {
    axios.post(
      "https://react-http-practice-8c294-default-rtdb.firebaseio.com/userDetails.json",
      user
    );
  };

  const errorHandler = () => {
    history.push("/login");
  };
  return (
    <div>
      {cartCtx.note && <Notification></Notification>}
      {cartCtx.cart && isLogedIn && <Cart></Cart>}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
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

        {/* <Route path="/store">
          {isLogedIn && <ProductPage></ProductPage>}
          {!isLogedIn && <Redirect to="/login"></Redirect>}
        </Route> */}
        <Route path="/store">
          {isLogedIn && <ProductPage></ProductPage>}
          {!isLogedIn && (
            <React.Fragment>
              <NavigationBar />
              {/* <Modal /> */}
              <ErrorModal
                message="Authentication Required"
                errorHandler={errorHandler}
              />
            </React.Fragment>
          )}
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
