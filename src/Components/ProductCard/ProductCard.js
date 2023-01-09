import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CartContext from "../../Store/cartContext";
import { FaCartPlus } from "react-icons/fa";

function ProductCard(props) {
  const cartCtx = useContext(CartContext);

  const clickHandler = () => {
    cartCtx.addItem({ ...props, quantity: 1 });
    cartCtx.notification(props.title);
  };
  return (
    <Card
      style={{
        width: "320px",
      }}
      className="mb-5 shadow "
    >
      <Card.Img
        variant="top"
        src={props.imageUrl}
        style={{ width: "320px", height: "260px" }}
      />

      <Card.Body>
        <Card.Title className="fw-bold" style={{ color: "#ff2323" }}>
          {props.title}
        </Card.Title>
        <div className="d-flex justify-content-between">
          <h4>Price : {props.price}</h4>
          <button
            className="btn text-light  "
            style={{ backgroundColor: "#16b915" }}
            onClick={clickHandler}
          >
            Add to cart <FaCartPlus />
          </button>
        </div>
        <Link to={"/product_detail/" + props.id}>
          <button
            className="btn text-light w-100 mt-2 fw-bold"
            style={{ backgroundColor: "#ff8c00" }}
          >
            Product details
          </button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
