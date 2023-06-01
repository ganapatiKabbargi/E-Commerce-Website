import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../Store/CartContext";
import { BsFillStarFill } from "react-icons/bs";

const ProductPriceDetail = () => {
  const ctx = useContext(CartContext);
  const params = useParams();

  const product = ctx.productArr.filter((p) => {
    return p.id === params.productId;
  });
  const [matchedProduct] = product;
  return (
    <React.Fragment>
      <div>
        <div
          style={{
            display: "inline",
            padding: "2px 6px",
            borderRadius: "5px",
            color: "white",
            backgroundColor: "#388E3C",
            marginRight: "10px",
          }}
        >
          4.1
          <BsFillStarFill
            style={{
              width: "13px",
              marginBottom: "4px",
              marginLeft: "5px",
            }}
          ></BsFillStarFill>
        </div>

        <span style={{ color: "grey" }}>
          ({Math.floor(Math.random() * 1000)} Ratings and{" "}
          {Math.floor(Math.random() * 500)} reviews)
        </span>
      </div>
      <div className="my-2">
        <span
          style={{
            color: "#388E3C",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          Special Price %
        </span>
      </div>
      <div
        style={{
          width: "300px",
          display: "flex",

          alignItems: "end",
          marginTop: "10px",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            fontWeight: "500",
            marginRight: "10px",
          }}
        >
          {/* &#8377; */}${matchedProduct.price}
        </div>
        <div
          style={{
            textDecoration: "line-through",
            color: "grey",
            marginRight: "10px",
            fontSize: "18px",
          }}
        >
          ${matchedProduct.price * 2}
        </div>
        <div
          style={{
            fontSize: "15px",
            color: "#388E3C",
            fontWeight: "600",
          }}
        >
          60% off
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductPriceDetail;
