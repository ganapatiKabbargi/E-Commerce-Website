import React, { Fragment } from "react";
import { BsYoutube, BsSpotify, BsFacebook } from "react-icons/bs";
import {} from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-between align-item-center py-3 px-5 mt-3 bg-success text-white">
        <div className="d-flex justify-content-between align-item-center">
          <h3>E-Commerce-Store</h3> &copy; All rights reserved
        </div>
        <div
          className="d-flex justify-content-between align-item-center "
          style={{ width: "300px" }}
        >
          <a href="#" className="text-white">
            <BsYoutube size="30px" />
          </a>
          <a href="#" className="text-white">
            <BsSpotify size="30px" />
          </a>
          <a href="#" className="text-white">
            <BsFacebook size="30px" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
