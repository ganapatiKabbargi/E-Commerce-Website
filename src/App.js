import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

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
    <CartProvider>
      {cartState && <Cart cartClose={cartCloseHandler}></Cart>}
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
        <ProductPage></ProductPage>
        <Footer></Footer>
      </Route>
    </CartProvider>
  );
}

export default App;
