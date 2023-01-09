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

function ProductPage(props) {
  const email = localStorage.getItem("email");
  const cartCtx = useContext(CartContext);
  const clickHandler = () => {
    cartCtx.showCart();
  };
  const ctx = useContext(CartContext);

  useEffect(() => {
    cartCtx.fetchProduct(email);
  }, []);

  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Container>
        <Title>Merchandise</Title>
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
        <button
          className="btn text-white"
          style={{ backgroundColor: "#ff1212" }}
          onClick={clickHandler}
        >
          See the cart
        </button>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default ProductPage;
