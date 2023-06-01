import React from "react";
import bg from "../../assets/24595852_2202_w039_n003_110b_p1_110.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <img src={bg} className={classes.img} alt="ecomerce_cart"></img>
      <div className={classes.heading}>
        <h1>E-Commerce-Store</h1>
      </div>
      <div className={classes.backdrop}></div>
    </header>
  );
};

export default Header;
