import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "../Cart/CartIcon";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <header>
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
            <Nav.Link href="#home" className="me-5 nav-item fs-5 ">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="me-5 nav-item fs-5">
              Store
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-5 nav-item fs-5">
              About
            </Nav.Link>
          </Nav>
          <button className="button">
            <span className="icon">
              <CartIcon />
            </span>
            <div className="badge">2</div>
          </button>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavigationBar;
