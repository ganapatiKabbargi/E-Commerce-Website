import React, { useState, useContext } from "react";
import CartContext from "../../Store/CartContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./CartSummary.module.css";

const CartSummary = (props) => {
  const cartCtx = useContext(CartContext);
  const history = useHistory();

  const [shippingCharge, setShippingCharge] = useState(0);
  const [discount, setDiscount] = useState(0);

  const purchaseHandler = () => {
    cartCtx.purchaseProduct();
  };

  const continueShoppingHandler = () => {
    history.push("/store");
  };

  const shippingHandler = (e) => {
    e.preventDefault();
    setShippingCharge(Math.floor(Math.random() * 300));
  };

  const discountHandler = (e) => {
    e.preventDefault();
    setDiscount(Math.floor(Math.random() * 300));
  };
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.orderSummary}>
          <h5>ORDER SUMMARY</h5>
          <div
            style={{
              marginTop: "10px",
            }}
            className={classes.amountDetail}
          >
            <span className={classes.amountDescription}>Subtotal :</span>
            <span>{props.total + ".0"}</span>
          </div>
          <div className={classes.amountDetail}>
            <span className={classes.amountDescription}>Tax (8%) :</span>
            <span>+{(props.total * (8 / 100)).toFixed(2)}</span>
          </div>
          <div className={classes.amountDetail}>
            <span className={classes.amountDescription}>Shipping Charge :</span>
            <span>+{shippingCharge}</span>
          </div>
          <div
            style={{
              marginBottom: "10px",
            }}
            className={classes.amountDetail}
          >
            <span className={classes.amountDescription}>Discount :</span>
            <span>-{discount}</span>
          </div>
          <span
            style={{
              fontWeight: "bold",
              color: "#dcae34",
            }}
          >
            Shipping Address
          </span>
          <form onSubmit={shippingHandler}>
            <div>
              <label>Deliver to,</label>
              <textarea type="text" required />
            </div>
            <div>
              <label>Postal Code :</label>
              <input type="number" required />
            </div>
            <button className={classes.estimateBtn} type="submit">
              Estimate Shipping
            </button>
          </form>
          <form onSubmit={discountHandler}>
            <label>Have a coupan code?</label>
            <input type="text" placeholder="Enter Code to redeem" required />
            <button className={classes.redeemBtn} type="submit">
              Redeem
            </button>
          </form>
        </div>
        <div className={classes.checkout_container}>
          <div className={classes.grandTotal}>
            <span>Grand Total :</span>
            <span>
              {(
                props.total +
                props.total * (8 / 100) +
                +shippingCharge -
                +discount
              ).toFixed(2)}
            </span>
          </div>

          <button className={classes.checkout} onClick={purchaseHandler}>
            {" "}
            Proceed to Checkout
          </button>
          <button
            className={classes.shopping}
            onClick={continueShoppingHandler}
          >
            {" "}
            Continue Shopping --&gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartSummary;
