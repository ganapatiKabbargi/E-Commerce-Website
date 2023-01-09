import React, { useContext, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cartContext";
import { NavLink, useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import "./Navbar.css";

const NavigationBar = (props) => {
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  const isLogedIn = cartCtx.isLogedIn;

  const cartHandler = () => {
    cartCtx.showCart();
  };

  const logoutHandler = () => {
    cartCtx.logout();
    history.replace("/login");
  };

  let quantity = 0;
  cartCtx.products.forEach((product) => {
    quantity = quantity + +product.quantity;
  });

  return (
    <Fragment>
      <Navbar
        variant="dark"
        className="p-2 shadow   "
        fixed="top"
        style={{ background: "linear-gradient(to right , #283c86,#45a247" }}
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-2">
            E-Commerce Store
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink
              activeClassName="active"
              to="/home"
              className="me-5 nav-item fs-5 "
            >
              Home
            </NavLink>

            <NavLink
              activeClassName="active"
              to="/store"
              className="me-5 nav-item fs-5 "
            >
              Store
            </NavLink>

            <NavLink
              activeClassName="active"
              to="/about"
              className="me-5 nav-item fs-5 "
            >
              About
            </NavLink>

            <NavLink
              activeClassName="active"
              to="/contact"
              className="me-5 nav-item fs-5 "
            >
              Contact Us
            </NavLink>
            {!isLogedIn && (
              <NavLink
                activeClassName="active"
                to="/login"
                className="me-5 nav-item fs-5 "
              >
                Login
              </NavLink>
            )}
          </Nav>

          {isLogedIn && (
            <button className="button" onClick={cartHandler}>
              <span className="icon">
                <CartIcon />
              </span>
              <div className="badge ">{quantity}</div>
            </button>
          )}
          {isLogedIn && (
            <NavLink
              activeClassName="active"
              to="/login"
              className="ms-4 nav-item fs-5 "
              onClick={logoutHandler}
            >
              <FiLogOut></FiLogOut>
            </NavLink>
          )}
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavigationBar;
