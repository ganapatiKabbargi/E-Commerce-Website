import React from "react";
import NavigationBar from "./Components/Navbar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#eed9c4" }}>
      <NavigationBar></NavigationBar>
      <ProductPage></ProductPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
