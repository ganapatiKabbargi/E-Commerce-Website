import React from "react";
import classes from "./ProductRating.module.css";

const ProductRating = () => {
  let rating = [5, 4, 3, 2, 1];
  let widths = [
    { w: "100%", m: "8px 0px", c: "#388E3C" },
    { w: "46.0288%", m: "20px 0px", c: "#388E3C" },
    { w: "19.8874%", m: "20px 0px", c: "#388E3C" },
    { w: " 8.19262%", m: "20px 0px", c: "#FF9F01" },
    { w: " 16.6354%", m: "20px 0px", c: "#FB641B" },
  ];
  let ratings = [1599, 736, 318, 131, 266];
  return (
    <div className="_2e3Uck _2_0QCf">
      <div className="d-flex">
        <div className="col-3-12" style={{ width: "180px" }}>
          <div className="col">
            <div className="row">
              <div className="col-12-12 " style={{ padding: "0px 60px" }}>
                <div className={classes.rating}>4.1</div>
                <div className={classes.star}>★</div>
              </div>
            </div>
            <div className={classes.ratings}>
              <div className="col-12-12">
                <span>3,050 Ratings &amp;</span>
              </div>
            </div>
            <div className={classes.reviews}>
              <div className="col-12-12">
                <span>322 Reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <ul style={{ listStyleType: "none" }}>
              {rating.map((el) => {
                return (
                  <li>
                    <div>
                      <span>{el}</span>
                      <span>★</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <ul
              style={{
                listStyleType: "none",
                padding: "0px 15px",
              }}
            >
              {widths.map((el) => {
                return (
                  <li style={{ margin: el.m }}>
                    <div>
                      <div
                        style={{
                          width: "230px",
                          backgroundColor: "lightgrey",
                          borderRadius: "3px",
                          height: "5px",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            width: el.w,
                            backgroundColor: el.c,
                            height: "5px",
                            borderRadius: "2px",
                          }}
                        ></span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <ul
              style={{
                listStyleType: "none",
                color: "grey",
                padding: "0px",
              }}
            >
              {ratings.map((el) => {
                return (
                  <li>
                    <div>{el}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
