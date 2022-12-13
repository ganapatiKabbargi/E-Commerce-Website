import React, { useState } from "react";
import NavigationBar from "./Components/Navbar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  const [cartState, setCartState] = useState(false);

  const cartClickHandler = () => {
    setCartState(true);
  };

  const cartCloseHandler = () => {
    setCartState(false);
  };
  return (
    <CartProvider className="App">
      {cartState && <Cart cartClose={cartCloseHandler}></Cart>}
      <NavigationBar cartClick={cartClickHandler}></NavigationBar>
      <ProductPage></ProductPage>
      <Footer></Footer>
    </CartProvider>
  );
}

export default App;
