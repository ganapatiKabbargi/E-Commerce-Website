import React, { useState } from "react";
import NavigationBar from "./Components/Navbar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";

function App() {
  const [cartState, setCartState] = useState(false);

  const cartClickHandler = () => {
    setCartState(true);
  };

  const cartCloseHandler = () => {
    setCartState(false);
  };
  return (
    <div className="App" style={{ backgroundColor: "#eed9c4" }}>
      {cartState && <Cart cartClose={cartCloseHandler}></Cart>}
      <NavigationBar cartClick={cartClickHandler}></NavigationBar>
      <ProductPage></ProductPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
