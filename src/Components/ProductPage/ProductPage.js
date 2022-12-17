import React, { Fragment, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../ProductCard/ProductCard";
import Title from "../Title/Title";
import CartContext from "../../Store/cartContext";

import { Button } from "react-bootstrap";
import NavigationBar from "../Navbar/Navbar";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";

function ProductPage(props) {
  const cartCtx = useContext(CartContext);
  const clickHandler = () => {
    cartCtx.cartOpen();
  };
  const ctx = useContext(CartContext);
  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Container>
        <Title>Music collections</Title>
        <Row>
          {ctx.productArr.map((product) => {
            return (
              <Col xs={3}>
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  id={product.id}
                ></ProductCard>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="d-flex justify-content-center p-3 mt-4">
        <Button variant="outline-primary" onClick={clickHandler}>
          See the cart
        </Button>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default ProductPage;
