import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const ProductReview = (props) => {
  return (
    <React.Fragment>
      <div style={{ marginTop: "15px " }}>
        <div
          style={{
            padding: "0px 6px",
            borderRadius: "5px",
            color: "white",
            backgroundColor: "#388E3C",
            marginRight: "10px",
            display: "inline",
          }}
        >
          4
          <BsFillStarFill
            style={{
              width: "13px",
              marginBottom: "4px",
              marginLeft: "5px",
            }}
          ></BsFillStarFill>
        </div>

        <span style={{ fontWeight: "600" }}>{props.review}</span>
      </div>
      <div style={{ margin: "6px 0px" }}>
        <span>{props.description}</span>
      </div>
      <div style={{ display: "flex", color: "grey" }}>
        <div style={{ marginRight: "30px" }}>
          <span style={{ fontWeight: "600", fontSize: "13px" }}>
            {props.buyer}
          </span>
        </div>
        <div>
          <span style={{ fontSize: "15px" }}>{props.days}</span>
        </div>
      </div>
      <div>
        <span style={{ fontSize: "15px", color: "grey" }}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            class="_3V5JvW"
            style={{ marginRight: "10px" }}
          >
            <g>
              <circle cx="6" cy="6" r="6" fill="#878787"></circle>
              <path
                stroke="#FFF"
                strokeWidth="1.5"
                d="M3 6l2 2 4-4"
                fill="#878787"
              ></path>
            </g>
          </svg>
          Certified buyer,{props.city}
        </span>
      </div>
    </React.Fragment>
  );
};

export default ProductReview;
