import React, { Fragment } from "react";
import { BsYoutube, BsSpotify, BsFacebook } from "react-icons/bs";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <footer
        // className="d-flex justify-content-between align-item-center py-3 px-5 mt-3  text-white"
        // style={{
        //   backgroundColor: "rgba(17, 24, 39, 1)",
        // }}
        className={classes.footer}
      >
        <div
          // className="d-flex justify-content-between align-item-center"
          className={classes.logo}
        >
          <h3>E-Commerce-Store</h3> &copy; All rights reserved
        </div>
        <div
          // className="d-flex justify-content-between align-item-center "
          // style={{ width: "300px" }}
          className={classes.social}
        >
          <a href="#youtube" className="text-white">
            <BsYoutube size="30px" />
          </a>
          <a href="#spotify" className="text-white">
            <BsSpotify size="30px" />
          </a>
          <a href="#facebook" className="text-white">
            <BsFacebook size="30px" />
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
