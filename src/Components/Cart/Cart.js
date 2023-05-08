import React, { useContext, Fragment } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../Store/cartContext";
import "./Cart.css";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);
  let cartIsEmpty = CartCtx.products.length === 0 ? true : false;

  const cartCloseHandler = () => {
    CartCtx.hideCart();
  };

  const backdropHandler = () => {
    CartCtx.hideCart();
  };

  const purchaseHandler = () => {
    CartCtx.purchaseProduct();
  };

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

  return (
    <Fragment>
      <Modal onConfirm={backdropHandler} />

      <div
        className={CartCtx.cart ? "cart p-4 text-white" : "hide"}
        style={{
          background: "linear-gradient(to top right , #ffe000,#799f0c",
        }}
      >
        <div className="d-flex justify-content-between">
          <em className="fs-4 fw-bold">Welcome</em>
          <button className="btn btn-outline-light" onClick={cartCloseHandler}>
            {" "}
            X
          </button>
        </div>
        <h1 className=" text-center mb-4">Cart</h1>
        {cartIsEmpty && (
          <div
            className="text-center fw-2 mt-5 p-2  shadow rounded"
            style={{ background: "linear-gradient(to right , #c31432,#240b36" }}
          >
            <h4>Your Cart Is Empty</h4>
            <h5>Please Add Products To Purchase</h5>
          </div>
        )}
        {!cartIsEmpty && (
          <div>
            <div
              className="pb-2 mb-2 border border-2 rounded"
              style={{
                borderBottom: "2px solid ",
                background: "linear-gradient(to right , #283c86,#45a247",
              }}
            >
              <span className="fs-4 ms-4 me-5">Item</span>
              <span className="fs-4 ms-5">Price</span>
              <span className="fs-4 ms-5">Quantity</span>
            </div>
            <div
              className="border border-2 p-2 rounded shadow"
              style={{
                background: "linear-gradient(to right , #283c86,#45a247",
                height: "340px",
                overflow: "scroll",
              }}
            >
              {cartItems}
            </div>

            <div
              className="text-end mt-4 rounded  p-2 shadow "
              style={{
                background: "linear-gradient(to right , #283c86,#45a247",
              }}
            >
              <h4>Total Amount : {total}</h4>
            </div>
            <div className="text-center mt-5">
              <button
                className="btn text-light"
                onClick={purchaseHandler}
                style={{ backgroundColor: "#ff1d00" }}
              >
                Purchase
              </button>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Cart;
