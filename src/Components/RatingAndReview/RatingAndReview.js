import React from "react";
import ProductRating from "../ProductRating/ProductRating";
import ProductReview from "../ProductReview/ProductReview";

const RatingAndReview = () => {
  const review_details = [
    {
      review: "Pretty Good",
      description: "It is a very good product.",
      days: "1 month ago",
      buyer: "John Cena",
      city: "Mumbai",
    },
    {
      review: "Fantastic",
      description:
        "Awesome product. It is stretchable. Cool. Best for fashionlovers. Must try. I am happy. Size and quality is as perexpectation.",
      days: "1 month ago",
      buyer: "John Cena",
      city: "Kolkata",
    },
    {
      review: "Excellent",
      description:
        " Excellent quality.. the material is very soft and light...highly recommended... ❤️❤️❤️❤️",
      days: "2 month ago",
      buyer: "John Cena",
      city: "Banglore",
    },
  ];
  return (
    <div style={{ border: "1px solid lightgrey", padding: "10px 20px" }}>
      <div
        style={{
          padding: "10px",
          marginBottom: "50px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: "22px", fontWeight: "500" }}>
            Ratings &amp; Reviews
          </div>
          <div>
            <button
              type="submit"
              style={{
                border: "2px solid grey",
                backgroundColor: "white",
                padding: "5px 10px",
              }}
            >
              <span>Rate Product</span>
            </button>
          </div>
        </div>
      </div>

      <ProductRating />
      <div>
        {review_details.map((el) => {
          return (
            <ProductReview
              review={el.review}
              description={el.description}
              days={el.days}
              buyer={el.buyer}
              city={el.city}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RatingAndReview;
