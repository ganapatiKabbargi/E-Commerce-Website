import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductCard.css";

function ProductCard(props) {
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
          <Button variant="primary">Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
