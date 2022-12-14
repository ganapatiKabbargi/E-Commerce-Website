import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../ProductCard/ProductCard";
import Title from "../Title/Title";

import { Button } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    id: Math.random() * 100000,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    id: Math.random() * 100000,
  },
  {
    title: "Yellow and Black Color",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    id: Math.random() * 100000,
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    id: Math.random() * 100000,
  },
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    id: Math.random() * 100000,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    id: Math.random() * 100000,
  },
];

function ProductPage() {
  return (
    <Fragment>
      <Container>
        <Title>Music collections</Title>
        <Row>
          {productsArr.map((product) => {
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
        <Button variant="outline-primary">See the cart</Button>
      </div>
    </Fragment>
  );
}

export default ProductPage;
