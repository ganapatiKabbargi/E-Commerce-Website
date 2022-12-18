import React, { useContext, Fragment, useState, useEffect } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../Store/cartContext";
import "./Cart.css";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  let total = 0;
  let cartItems = CartCtx.products.map((product) => {
    total = total + product.price * product.quantity;
    return (
      <CartItem
        key={product.id}
        id={product.id}
        image={product.imageUrl}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
      ></CartItem>
    );
  });

  const cartCloseHandler = () => {
    // props.cartClose();
    CartCtx.cartClose();
  };
  const backdropHandler = () => {
    // props.cartClose();
    CartCtx.cartClose();
  };

  const purchaseHandler = () => {
    CartCtx.purchase();
  };
  return (
    <Fragment>
      <Modal onConfirm={backdropHandler} />
      <div className=" cart bg-success p-4 text-white">
        <div className="text-end">
          <button className="btn btn-outline-light" onClick={cartCloseHandler}>
            {" "}
            X
          </button>
        </div>
        <h1 className=" text-center mb-4">Cart</h1>
        <div className="pb-2 mb-2" style={{ borderBottom: "2px solid " }}>
          <span className="fs-4 ms-4 me-5">Item</span>
          <span className="fs-4 ms-5">Price</span>
          <span className="fs-4 ms-5">Quantity</span>
        </div>
        <div>{cartItems}</div>

        <div className="text-end mt-4">
          <h2>Total : {total}</h2>
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-primary" onClick={purchaseHandler}>
            Purchase
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
