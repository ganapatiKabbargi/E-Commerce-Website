import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from "../../Store/cartContext";
import "./ProductCard.css";

function ProductCard(props) {
  const cartCtx = useContext(CartContext);
  const clickHandler = () => {
    cartCtx.addItem({ ...props, quantity: 1 });
  };
  return (
    <Card
      style={{
        width: "18rem",
      }}
      className="shadow mb-5 "
    >
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div className="d-flex justify-content-between">
          <h4>Price : {props.price}</h4>
          <Button variant="primary" onClick={clickHandler}>
            Add to cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
