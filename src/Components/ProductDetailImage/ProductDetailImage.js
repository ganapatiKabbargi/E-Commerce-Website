import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import CartContext from "../../Store/cartContext";

const ProductDetailImage = () => {
  const ctx = useContext(CartContext);
  const params = useParams();

  const product = ctx.productArr.filter((p) => {
    return p.id === params.productId;
  });
  const [matchedProduct] = product;

  const clickHandler = () => {
    ctx.addItem({ ...matchedProduct, quantity: 1 });
    ctx.notification(matchedProduct.title);
  };

  const purchaseHandler = () => {
    ctx.purchaseProduct();
  };
  return (
    <React.Fragment>
      <div
        className="bg-white border  "
        style={{
          width: "550px",
          padding: "10px",
          marginRight: "10px",
        }}
      >
        <div className="" style={{ position: "relative" }}>
          <img
            src={matchedProduct.imageUrl}
            alt="#"
            className=" mb-4 "
            style={{ width: "500px", height: "360px" }}
          ></img>
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "rgb(0,160,152)",
              color: "white",
              padding: "1px 8px",
              borderRadius: "2px",
              fontWeight: "600",
            }}
          >
            BESTSELLER
          </div>
        </div>
        <div className="d-flex justify-content-around mb-4">
          <div>
            {" "}
            <img src={matchedProduct.imageUrl} alt="@" className="w-50"></img>
          </div>
          <div>
            {" "}
            <img src={matchedProduct.imageUrl} alt="!" className="w-50"></img>
          </div>
          <div>
            {" "}
            <img src={matchedProduct.imageUrl} alt="$" className="w-50"></img>
          </div>
          <div>
            {" "}
            <img src={matchedProduct.imageUrl} alt="&" className="w-50 "></img>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            className="btn shadow me-2 text-light fw-bold "
            style={{
              // backgroundColor: "#16b915",
              backgroundColor: "#FF9F01",
              width: "240px",
              borderRadius: "0px",
              padding: "10px",
            }}
            onClick={clickHandler}
          >
            Add to Cart <FaCartPlus />
          </button>
          <button
            className="btn  shadow text-light fw-bold"
            onClick={purchaseHandler}
            style={{
              width: "240px",
              borderRadius: "0px",
              //  backgroundColor: "#ff1d00"
              backgroundColor: "#FB641B",
              padding: "10px",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetailImage;
