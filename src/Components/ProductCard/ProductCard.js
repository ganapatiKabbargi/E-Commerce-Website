import React, { useContext, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CartContext from "../../Store/cartContext";
import { FaCartPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BsFillStarFill } from "react-icons/bs";
import classes from "./ProductCard.module.css";

function ProductCard(props) {
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  const [rating, setRating] = useState();

  const clickHandler = () => {
    cartCtx.addItem({ ...props, quantity: 1 });
    cartCtx.notification(props.title);
  };

  useEffect(() => {
    setRating((Math.random() * (5 - 3) + 3).toFixed(1));
  }, []);
  return (
    <Card className={classes.productCard}>
      <Card.Img
        variant="top"
        src={props.imageUrl}
        className={classes.productImg}
      />

      <Card.Body>
        <Link
          className={classes.productDetail}
          to={"/product_detail/" + props.id}
        >
          {props.title.slice(0, 28)}
        </Link>
        <div className={classes.color}>{props.colors}</div>
        <div>
          <div className={classes.rating}>
            {rating}
            <BsFillStarFill className={classes.star}></BsFillStarFill>
          </div>

          <span style={{ color: "grey" }}>
            {/* ({Math.floor(Math.random() * 1000)}) */}
            {rating}
          </span>
        </div>

        <div className={classes.price_container}>
          <div className={classes.price}>${props.price}</div>
          <div className={classes.discount_price}>${props.price * 2}</div>
          <div className={classes.discount}>60% off</div>
        </div>
        <div>
          <div className={classes.delivery}>Free Delivery</div>
        </div>
        <div className={classes.bankOffer}>
          <div className={classes.offer}>Bank Offer</div>
          <div className={classes.add}>
            {/* <h4>Price : {props.price}</h4> */}
            <button
              className="btn text-light  "
              style={{ backgroundColor: "#FF9F01", zIndex: 3000 }}
              onClick={clickHandler}
            >
              Add to cart <FaCartPlus />
            </button>
          </div>
        </div>

        <div className={classes.like}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 20 16"
          >
            <path
              d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
              fill="grey"
              className="eX72wL"
              stroke="grey"
              fillRule="evenodd"
              opacity=".9"
            ></path>
          </svg>
        </div>

        {/* <Link to={"/product_detail/" + props.id}>
          <button
            className="btn text-light w-100 mt-2 fw-bold"
            // style={{ backgroundColor: "#ff8c00" }}
            // style={{ backgroundColor: "rgba(17, 24, 39, 1)" }}
            style={{ backgroundColor: "rgb(224, 195, 85)" }}
          >
            Product details
          </button>
        </Link> */}
        {rating > 4.5 && <div className={classes.best_seller}>BESTSELLER</div>}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
