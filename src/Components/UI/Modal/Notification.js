import React, { useContext } from "react";
import CartContext from "../../../Store/cartContext";
import classes from "./Notification.module.css";

const Notification = () => {
  const cartCtx = useContext(CartContext);
  const title = cartCtx.title;
  return (
    <div className={classes.noteCard}>
      <span className={classes.text}>
        {" "}
        {title.slice(0, 30)} added to the cart
      </span>
    </div>
  );
};

export default Notification;
