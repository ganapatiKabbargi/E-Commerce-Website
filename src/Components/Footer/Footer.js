import React, { Fragment } from "react";
import { BsYoutube, BsSpotify, BsFacebook } from "react-icons/bs";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <div className={classes.logo}>
          <h3>E-Commerce-Store</h3> &copy; All rights reserved
        </div>
        <div className={classes.social}>
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
