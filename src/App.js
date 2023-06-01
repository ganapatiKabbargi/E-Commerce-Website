import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import CartContext from "./Store/CartContext";
import Notification from "./Components/UI/Modal/Notification";
import ErrorModal from "./Components/UI/Modal/ErrorModal";
import axios from "axios";
import NavigationBar from "./Components/Navbar/Navbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Loader from "./Components/UI/Modal/Loader";

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
      "https://e-commerce-app-eabe3-default-rtdb.firebaseio.com/userDetails.json",
      user
    );
  };

  const errorHandler = () => {
    history.push("/login");
  };
  return (
    <div>
      {cartCtx.note && <Notification></Notification>}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        {isLogedIn && (
          <Route path="/cart">
            <React.Suspense fallback={<Loader />}>
              <LazyCart></LazyCart>
            </React.Suspense>
          </Route>
        )}
        <Route path="/home">
          <React.Suspense fallback={<Loader />}>
            <LazyHome></LazyHome>
          </React.Suspense>
        </Route>
        <Route path="/about">
          <React.Suspense fallback={<Loader />}>
            <LazyAbout></LazyAbout>
          </React.Suspense>
        </Route>
        <Route path="/contact">
          <React.Suspense fallback={<Loader />}>
            <LazyContact userDetail={userDetailSubmitHandler}></LazyContact>
          </React.Suspense>
        </Route>

        {/* <Route path="/store">
          {isLogedIn && <ProductPage></ProductPage>}
          {!isLogedIn && <Redirect to="/login"></Redirect>}
        </Route> */}
        <Route path="/store">
          {isLogedIn && (
            <React.Suspense fallback={<Loader />}>
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
          <React.Suspense fallback={<Loader />}>
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
