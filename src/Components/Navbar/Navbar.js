import React, { useContext, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContext";
import { NavLink, useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import classes from "./Navbar.module.css";

const NavigationBar = (props) => {
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  const isLogedIn = cartCtx.isLogedIn;

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
        className="p-2 shadow"
        fixed="top"
        style={{ backgroundColor: "rgba(17, 24, 39, 1)" }}
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-2">
            E-Commerce Store
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink
              activeClassName={classes.active}
              to="/home"
              className={classes.nav_item}
            >
              Home
            </NavLink>

            <NavLink
              activeClassName={classes.active}
              to="/store"
              className={classes.nav_item}
            >
              Store
            </NavLink>

            <NavLink
              activeClassName={classes.active}
              to="/about"
              className={classes.nav_item}
            >
              About
            </NavLink>

            <NavLink
              activeClassName={classes.active}
              to="/contact"
              className={classes.nav_item}
            >
              Contact Us
            </NavLink>
            {!isLogedIn && (
              <NavLink
                activeClassName={classes.active}
                to="/login"
                className={classes.nav_item}
              >
                Login
              </NavLink>
            )}
          </Nav>

          {isLogedIn && (
            <NavLink to="/cart" className={classes.button}>
              <span className={classes.icon}>
                <CartIcon />
              </span>
              <div className={classes.badge}>{quantity}</div>
            </NavLink>
          )}
          {isLogedIn && (
            <NavLink
              activeClassName={classes.active}
              to="/login"
              className={classes.nav_item}
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
