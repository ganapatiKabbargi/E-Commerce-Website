import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import ProductPage from "./Components/ProductPage/ProductPage";
// import Cart from "./Components/Cart/Cart";
// import About from "./Pages/About";
// import Home from "./Pages/Home";
// import Contact from "./Pages/Contact";
// import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Login";
import CartContext from "./Store/cartContext";
import Notification from "./Components/UI/Modal/Notification";
import ErrorModal from "./Components/UI/Modal/ErrorModal";
import axios from "axios";
import NavigationBar from "./Components/Navbar/Navbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "./Components/UI/Modal/Modal";

// adding lazy loading
const LazyProductPage = React.lazy(() =>
  import("./Components/ProductPage/ProductPage")
);

const LazyAbout = React.lazy(() => import("./Pages/About"));
const LazyHome = React.lazy(() => import("./Pages/Home"));
const LazyContact = React.lazy(() => import("./Pages/Contact"));
const LazyProductDetail = React.lazy(() => import("./Pages/ProductDetail"));
const LazyCart = React.lazy(() => import("./Components/Cart/Cart"));

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
      {/* {isLogedIn && (
        <Route path="/cart">
          <React.Suspense fallback="CartLoading">
            <LazyCart></LazyCart>
          </React.Suspense>
        </Route>
      )} */}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        {isLogedIn && (
          <Route path="/cart">
            <React.Suspense fallback="CartLoading">
              <LazyCart></LazyCart>
            </React.Suspense>
          </Route>
        )}
        <Route path="/home">
          <React.Suspense fallback="Fetching Home Page">
            <LazyHome></LazyHome>
          </React.Suspense>
        </Route>
        <Route path="/about">
          <React.Suspense fallback="Fetching About Page">
            <LazyAbout></LazyAbout>
          </React.Suspense>
        </Route>
        <Route path="/contact">
          <React.Suspense fallback="Fetching Contact Page">
            <LazyContact userDetail={userDetailSubmitHandler}></LazyContact>
          </React.Suspense>
        </Route>

        {/* <Route path="/store">
          {isLogedIn && <ProductPage></ProductPage>}
          {!isLogedIn && <Redirect to="/login"></Redirect>}
        </Route> */}
        <Route path="/store">
          {isLogedIn && (
            <React.Suspense fallback="product page Loading">
              <LazyProductPage></LazyProductPage>
            </React.Suspense>
          )}
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
          <React.Suspense fallback="Fetching product detail">
            <LazyProductDetail></LazyProductDetail>
          </React.Suspense>
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
