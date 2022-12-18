import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CartContext from "../../Store/cartContext";
import "./ProductCard.css";

function ProductCard(props) {
  const cartCtx = useContext(CartContext);
  let email = cartCtx.email;
  const clickHandler = () => {
    cartCtx.addItem({ ...props, quantity: 1 });
    cartCtx.notification(props.title);
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
        <Link to={"/product_detail/" + props.id}>
          <button className="btn btn-outline-success w-100 mt-2">
            Product details
          </button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
