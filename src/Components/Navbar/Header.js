import React from "react";
import bg from "../../assets/24595852_2202_w039_n003_110b_p1_110.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header
    // style={{
    // height: "400px",
    // backgroundColor: "#fccb06",
    // backgroundColor: "rgba(17, 24, 39, 1)",
    // background: "linear-gradient(to top right , #30405A,#fccb06)",
    // color: "white",
    // fontSize: "80px",
    // fontFamily: "brush-script",
    // position: "relative",
    // }}
    // className="d-flex justify-content-center align-items-center pt-5"
    >
      {/* <h1 style={{ fontSize: "80px", fontFamily: "brush-script" }}>
        E-Commerce-Store
      </h1> */}
      <img
        src={bg}
        // style={{ height: "400px", width: "100%" }}
        className={classes.img}
      ></img>
      <div
        // style={{
        //   position: "absolute",
        //   top: "50%",
        //   left: "50%",
        //   transform: "translate(-50%,-50%)",
        //   zIndex: "19",
        // }}
        className={classes.heading}
      >
        <h1>E-Commerce-Store</h1>
      </div>
      <div className={classes.backdrop}></div>
    </header>
  );
};

export default Header;
