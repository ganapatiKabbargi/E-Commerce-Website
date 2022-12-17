import React, { useContext, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cartContext";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";

const NavigationBar = (props) => {
  const cartCtx = useContext(CartContext);
  const isLogedIn = cartCtx.isLogedIn;
  const history = useHistory();
  const cartHandler = () => {
    props.cartClick();
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
        // bg="success"
        variant="dark"
        className="p-2 shadow   bg-success"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-2">
            E-Commerce Store
          </Navbar.Brand>
          <Nav className="ms-auto">
            {isLogedIn && (
              <NavLink
                activeClassName="active"
                to="/home"
                className="me-5 nav-item fs-5 "
              >
                Home
              </NavLink>
            )}
            {isLogedIn && (
              <NavLink
                activeClassName="active"
                to="/store"
                className="me-5 nav-item fs-5 "
              >
                Store
              </NavLink>
            )}
            {isLogedIn && (
              <NavLink
                activeClassName="active"
                to="/about"
                className="me-5 nav-item fs-5 "
              >
                About
              </NavLink>
            )}
            {isLogedIn && (
              <NavLink
                activeClassName="active"
                to="/contact"
                className="me-5 nav-item fs-5 "
              >
                Contact Us
              </NavLink>
            )}
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
            <button className="btn btn-success" onClick={logoutHandler}>
              Logout
            </button>
          )}
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavigationBar;
