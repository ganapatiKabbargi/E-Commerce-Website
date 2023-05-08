import React from "react";

const Header = () => {
  return (
    <div
      style={{
        height: "400px",
        backgroundColor: "#90ee90",
        // backgroundColor: "rgba(17, 24, 39, 1)",
        color: "white",
      }}
      className="d-flex justify-content-center align-items-center pt-5"
    >
      <h1 style={{ fontSize: "80px", fontFamily: "brush-script" }}>
        E-Commerce-Store
      </h1>
    </div>
  );
};

export default Header;
