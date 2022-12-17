import React, { useContext, useState } from "react";
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
import Login from "./Pages/Login";
import CartContext from "./Store/cartContext";

function App() {
  const [cartState, setCartState] = useState(false);
  const cartCtx = useContext(CartContext);
  const logedIn = cartCtx.isLogedIn;

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
    <CartProvider>
      {cartState && <Cart cartClose={cartCloseHandler}></Cart>}
      <Switch>
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
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
