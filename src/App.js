import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavigationBar from "./Components/Navbar/Navbar";
import Header from "./Components/Navbar/Header";
import ProductPage from "./Components/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  const [cartState, setCartState] = useState(false);

  const cartClickHandler = () => {
    setCartState(true);
  };

  const cartCloseHandler = () => {
    setCartState(false);
  };

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
    <Switch>
      <CartProvider>
        {cartState && <Cart cartClose={cartCloseHandler}></Cart>}
        <Route path="/" exact>
          <Redirect to="/store"></Redirect>
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
          <NavigationBar cartClick={cartClickHandler}></NavigationBar>
          <Header></Header>
          <ProductPage openCart={cartClickHandler}></ProductPage>
          <Footer></Footer>
        </Route>
        <Route path="/product_detail/:productId">
          <ProductDetail></ProductDetail>
        </Route>
      </CartProvider>
    </Switch>
  );
}

export default App;
