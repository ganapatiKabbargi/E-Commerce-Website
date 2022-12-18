import React, { useContext } from "react";
import CartContext from "../../../Store/cartContext";
import "./Notification.css";

const Notification = () => {
  const cartCtx = useContext(CartContext);
  const title = cartCtx.title;
  return (
    <div className="noteCard d-flex justify-content-center align-items-center rounded shadow px-3 me-5 text-white ">
      <span className="fs-5"> {title} added to the cart</span>
    </div>
  );
};

export default Notification;
