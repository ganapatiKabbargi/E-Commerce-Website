import React, { useContext } from "react";
import CartContext from "../../Store/cartContext";
import "./Cart.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CI = (props) => {
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  const removeProductHandler = () => {
    cartCtx.removeItem(props.id);
  };

  const addProductHandler = () => {
    cartCtx.addItem(props);
  };

  const removeProductFromCartHandler = () => {
    if (
      window.confirm(`Are you sure want to remove ${props.title} from cart`)
    ) {
      cartCtx.removeFromCart(props.id);
    }
  };
  const viewProductHandler = () => {
    history.push("/product_detail/" + props.id);
  };
  return (
    <div>
      <div
        className="p-2 w-100 h-100 position-relative  border-bottom border"
        style={{
          borderBottom: "2px solid lightgrey",
        }}
      >
        <div
          className="d-inline-block me-0"
          style={{
            width: "415px",
          }}
        >
          <img
            style={{ width: "80px", height: "80px" }}
            src={props.image}
            onClick={viewProductHandler}
          />
          <div
            className="d-inline my-0 mx-3 text-secondary "
            style={{
              fontFamily: "brush-script",
            }}
          >
            {props.title.slice(0, 33)}
          </div>
        </div>
        <span style={{ marginRight: "130px " }}>{props.price}</span>
        <div
          className="d-inline-block"
          style={{
            marginRight: " 140px",
          }}
        >
          <button
            onClick={removeProductHandler}
            className="border me-1 border-2 rounded px-2 text-light "
            style={{ backgroundColor: "rgb(139, 181, 190)" }}
          >
            -
          </button>
          <span className="my-0 mx-2">{props.quantity}</span>
          <button
            onClick={addProductHandler}
            className="border me-1 border-2 rounded px-2 text-light"
            style={{ backgroundColor: "rgb(139, 181, 190)" }}
          >
            +
          </button>
        </div>
        <span className="fw-bold">{props.quantity * props.price}</span>
        <button
          className="btn position-absolute border-0"
          style={{ top: "0px", right: "0px" }}
          onClick={removeProductFromCartHandler}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CI;
