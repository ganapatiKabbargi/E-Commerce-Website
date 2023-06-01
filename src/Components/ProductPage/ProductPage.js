import React, { Fragment, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../ProductCard/ProductCard";
import Title from "../Title/Title";
import CartContext from "../../Store/cartContext";
import NavigationBar from "../Navbar/Navbar";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";

function ProductPage(props) {
  const email = localStorage.getItem("email");
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  const clickHandler = () => {
    // cartCtx.showCart();
    history.push("/cart");
  };
  const ctx = useContext(CartContext);

  // useEffect(() => {
  //   cartCtx.fetchProduct(email);
  // }, []);

  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Container>
        <Title>Fashion and Clothing</Title>
        <Row>
          {ctx.productArr.slice(0, 4).map((product) => {
            return (
              <Col xs={3} key={product.id}>
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  id={product.id}
                  colors={product.colors}
                ></ProductCard>
              </Col>
            );
          })}
        </Row>
        <Title>Beauty and Cosmetics</Title>
        <Row>
          {ctx.productArr.slice(4, 8).map((product) => {
            return (
              <Col xs={3} key={product.id}>
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  id={product.id}
                  colors={product.colors}
                ></ProductCard>
              </Col>
            );
          })}
        </Row>
        <Title>Electronics</Title>
        <Row>
          {ctx.productArr.slice(8, 12).map((product) => {
            return (
              <Col xs={3} key={product.id}>
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  id={product.id}
                  colors={product.colors}
                ></ProductCard>
              </Col>
            );
          })}
        </Row>
        <Title>Furniture and decor</Title>
        <Row>
          {ctx.productArr.slice(12, 16).map((product) => {
            return (
              <Col xs={3} key={product.id}>
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  id={product.id}
                  colors={product.colors}
                ></ProductCard>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="d-flex justify-content-center p-3 mt-4">
        <button
          className="btn px-5 py-2 border border-2 border-primary rounded-5 fw-bold"
          // style={{ backgroundColor: "#ff1212" }}
          style={{ color: "rgba(17, 24, 39, 1)" }}
          onClick={clickHandler}
        >
          Go to cart
        </button>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default ProductPage;
