import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const ProductSeller = () => {
  return (
    <div
      class="_1iWRKW"
      style={{
        display: "flex",
        justifyContent: "space-between",
        // border: "2px solid green",
        width: "400px",
        margin: "20px 0px",
      }}
    >
      <div class="_1jneHk">
        <span style={{ color: "grey", fontWeight: "600" }}>Seller</span>
      </div>
      <div>
        <div id="sellerName" class="_1RLviY" style={{ marginBottom: "10px" }}>
          <span>
            <span style={{ color: "#287FF0", fontWeight: "600" }}>
              MYTHANGLORYRetail
            </span>
            <div
              class="_3LWZlK _1D-8OL"
              style={{
                backgroundColor: "#287FF0",
                width: "50px",
                borderRadius: "8px",
                padding: "1px 6px",
                color: "white",
                display: "inline",
                margin: "0px 10px",
              }}
            >
              4.9
              <BsFillStarFill
                style={{
                  width: "13px",
                  marginBottom: "4px",
                  marginLeft: "5px",
                  // background: "#388E3C",
                }}
              ></BsFillStarFill>
            </div>
          </span>
        </div>
        <div class="xDHSrl">
          <ul class="_2-RJLI" style={{ padding: "0px" }}>
            <li class="_1UNqMC">
              <div class="_2MJMLX">
                7 Days Replacement Policy
                <div class="Bv11UC" style={{ display: "inline-block" }}>
                  <span className="question">?</span>
                </div>
              </div>
            </li>
            <li class="_1UNqMC">
              <div class="_2MJMLX">
                GST invoice available
                <div style={{ display: "inline-block" }}>
                  <span className="question" style={{}}>
                    ?
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <li style={{ textDecoration: "none", listStyleType: "none" }}>
          <a
            href="/sellers?pid=SHVFRAGECXFJFTZR&amp;otracker=dynamic_omu_infinite_Best%252Bof%252BElectronics_4_1.dealCard.OMU_INFINITE_8JR5BM71BUKP&amp;fetchId=4aa3fd98-7928-4eff-ab4f-98080bb77873.SHVFRAGECXFJFTZR"
            style={{ textDecoration: "none", fontWeight: "600" }}
          >
            <div class="_1_xoMS">See other sellers</div>
          </a>
        </li>
      </div>
    </div>
  );
};

export default ProductSeller;
