import React, { useState, useContext } from "react";
import CartContext from "../../Store/cartContext";
import CI from "./CartItem";
import NavigationBar from "../Navbar/Navbar";
import cartModule from "./Cart.module.css";
import CartIcon from "./CartIcon";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CartSummary from "./CartSummary";

const C = () => {
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  console.log(history);
  let cartIsEmpty = cartCtx.products.length === 0 ? true : false;
  let total = 0;
  let items = 0;
  const cartItems = cartCtx.products.map((product) => {
    total = total + product.price * product.quantity;
    items++;
    return (
      <CI
        key={product.id}
        id={product.id}
        image={product.imageUrl}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
      ></CI>
    );
  });

  const storeHandler = () => {
    history.push("/store");
  };

  return (
    <React.Fragment>
      <NavigationBar />
      {cartIsEmpty ? (
        <div className={cartModule.eCart_container}>
          <div className={cartModule.eCart_icon}>
            <CartIcon />
          </div>
          <span style={{ fontSize: "36px" }}>Your Cart is Currently Empty</span>
          <p className={cartModule.eCart_p}>
            Before proceed to checkout you must add some products to your
            shopping cart. You will find a lot of interesting products on our
            "Shop" page.
          </p>
          <button className={cartModule.store_btn} onClick={storeHandler}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className={cartModule.cart_container}>
          <div className={cartModule.cartD_container}>
            <section className="w-100 pt-5">
              <h3
                style={{
                  fontFamily: "brush-script",
                }}
                className="text-center mb-4 "
              >
                YOUR BAG ({items} Items)
              </h3>
              <nav className={cartModule.cartNav}>
                <span
                  style={{
                    marginLeft: "130px",
                    marginRight: "240px",
                  }}
                >
                  ITEM
                </span>
                <span
                  style={{
                    marginRight: " 110px",
                  }}
                >
                  PRICE
                </span>
                <span style={{ marginRight: "150px" }}>QUANTITY</span>
                <span>TOTAL</span>
              </nav>
              {cartItems}
            </section>
          </div>
          <CartSummary total={total} />
        </div>
      )}
    </React.Fragment>
  );
};

export default C;
