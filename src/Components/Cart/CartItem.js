import React, { useContext } from "react";
import CartContext from "../../Store/cartContext";
import { MdDelete } from "react-icons/md";
import { useHistory } from "react-router-dom";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const history = useHistory();

  const removeProductHandler = () => {
    cartCtx.removeItem(props.id);
  };

  const addProductHandler = () => {
    cartCtx.addItem(props);
  };

  const removeProductFromCartHandler = () => {
    cartCtx.removeFromCart(props.id);
  };

  const viewProductHandler = () => {
    cartCtx.cartClose();
    history.push("/product_detail/" + props.id);
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center  bg-light p-2 text-black rounded mb-1"
      style={{ borderBottom: "2px solid grey" }}
    >
      <div
        className="d-flex align-items-center me-5 "
        style={{
          width: "150px",
          height: "60px",
        }}
        onClick={viewProductHandler}
      >
        <img
          className="rounded"
          style={{ width: "50px" }}
          src={props.image}
          alt="music album"
        ></img>
        <div className=" ms-3 ">{props.title}</div>
      </div>
      <div className=" d-flex justify-content-around align-items-center w-75">
        <div>{props.price}</div>
        <div className="d-flex">
          <button
            className="border me-1 border-2 rounded px-2"
            onClick={removeProductHandler}
          >
            -
          </button>
          <div
            className=" rounded border border-2 text-center text-white"
            style={{ width: "50px", backgroundColor: "#283c86" }}
          >
            {props.quantity}
          </div>
          <button
            className=" border ms-1 border-2 rounded px-1"
            onClick={addProductHandler}
          >
            +
          </button>
        </div>
      </div>
      <div onClick={removeProductFromCartHandler}>
        <MdDelete size={"26px"} style={{ color: "red" }} />
      </div>
    </div>
  );
};

export default CartItem;
