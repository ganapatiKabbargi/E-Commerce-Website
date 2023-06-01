import React from "react";

const ProductOffer = () => {
  const offers = [
    "Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and above",
    " Flat ₹4000 Discount on HDFC Bank Credit Card EMI Transactions onorders of ₹50,000 and above",
    "5% Cashback on Flipkart Axis Bank Card",
    "Get extra 9% off (price inclusive of cashback/coupon)",
  ];

  return (
    <React.Fragment>
      <div>
        <div className="my-2">
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Available offers
          </span>
        </div>
      </div>
      <div>
        {offers.map((el) => {
          return (
            <span style={{ display: "block", margin: "10px 0px" }}>
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                style={{
                  width: "18px",
                  height: "18px",
                }}
                alt="flipcart tag"
                // class="_3HLfAg"
              />
              <li style={{ listStyleType: "none", display: "inline" }}>
                <span style={{ fontWeight: "600", margin: " 0px 10px" }}>
                  Bank Offer
                </span>
                <span>{el}</span>
                <div class="Bv11UC _1qNw3R" style={{ display: "inline" }}>
                  <span style={{ color: "blue", fontWeight: "600" }}>
                    T&amp;C
                  </span>
                </div>
              </li>
            </span>
          );
        })}
        {/* <span>
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            style={{
              width: "18px",
              height: "18px",
            }}
            // class="_3HLfAg"
          />
          <li style={{ listStyleType: "none", display: "inline" }}>
            <span style={{ fontWeight: "600", margin: " 0px 10px" }}>
              Bank Offer
            </span>
            <span>
              Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on
              orders of ₹15,000 and above
            </span>
            <div class="Bv11UC _1qNw3R" style={{ display: "inline" }}>
              <span style={{ color: "blue", fontWeight: "600" }}>T&amp;C</span>
            </div>
          </li>
        </span>

        <span style={{ display: "block", margin: "10px 0px" }}>
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          <li style={{ listStyleType: "none", display: "inline" }}>
            <span style={{ fontWeight: "600", margin: "0px 10px" }}>
              Bank Offer
            </span>
            <span>
              Flat ₹4000 Discount on HDFC Bank Credit Card EMI Transactions on
              orders of ₹50,000 and above
            </span>
            <div class="Bv11UC _1qNw3R" style={{ display: "inline" }}>
              <span style={{ color: "blue", fontWeight: "600" }}>T&amp;C</span>
            </div>
          </li>
        </span>

        <span style={{ display: "block", margin: "10px 0px" }}>
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          <li style={{ listStyleType: "none", display: "inline" }}>
            <span style={{ fontWeight: "600", margin: "0px 10px" }}>
              Bank Offer
            </span>
            <span>5% Cashback on Flipkart Axis Bank Card</span>
            <div class="Bv11UC _1qNw3R" style={{ display: "inline" }}>
              <span style={{ color: "blue", fontWeight: "600" }}>T&amp;C</span>
            </div>
          </li>
        </span>

        <span style={{ display: "block", margin: "10px 0px" }}>
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          <li style={{ listStyleType: "none", display: "inline" }}>
            <span style={{ fontWeight: "600", margin: "0px 10px" }}>
              Bank Offer
            </span>
            <span>Get extra 9% off (price inclusive of cashback/coupon)</span>
            <div class="Bv11UC _1qNw3R" style={{ display: "inline" }}>
              <span style={{ color: "blue", fontWeight: "600" }}>T&amp;C</span>
            </div>
          </li>
        </span> */}
      </div>
      <div>
        <div style={{ color: "blue", fontWeight: "600" }}>
          View 3 more offers
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductOffer;
