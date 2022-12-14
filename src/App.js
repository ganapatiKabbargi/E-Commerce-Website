import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";

function App() {
  const [cartState, setCartState] = useState(false);

  const cartClickHandler = () => {
    setCartState(true);
  };

  const cartCloseHandler = () => {
    setCartState(false);
  };
  return (
    <CartProvider>
      {cartState && <Cart cartClose={cartCloseHandler}></Cart>}
      <Route path="/about">
        <About></About>
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
