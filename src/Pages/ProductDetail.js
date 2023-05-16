import React, { Fragment, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import NavigationBar from "../Components/Navbar/Navbar";
import CartContext from "../Store/cartContext";
import ProductOffer from "../Components/ProductOffer/ProductOffer";
import ProductSeller from "../Components/ProductSeller/ProductSeller";
import RatingAndReview from "../Components/RatingAndReview/RatingAndReview";
import ProductDetailImage from "../Components/ProductDetailImage/ProductDetailImage";
import ProductPriceDetail from "../Components/ProductPriceDetail/ProductPriceDetail";

const ProductDetail = () => {
  const ctx = useContext(CartContext);
  const params = useParams();
  const history = useHistory();

  const product = ctx.productArr.filter((p) => {
    return p.id === params.productId;
  });
  const [matchedProduct] = product;

  const closePageHandler = () => {
    history.push("/store");
  };

  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <div
        className=" px-5"
        style={{ height: "100vh", display: "flex", paddingTop: "100px" }}
      >
        <ProductDetailImage />

        <div className="" style={{ overflow: "scroll", width: "950px" }}>
          {/* <div className="d-flex justify-content-end">
            <button className="btn fs-5 fw-bold" onClick={closePageHandler}>
              X
            </button>
          </div> */}
          <div className="p-4  border shadow rounded bg-white ">
            <p style={{ fontSize: "22px" }}>{matchedProduct.title}</p>
            <ProductPriceDetail />
            <ProductOffer />
            <ProductSeller />
            <RatingAndReview />
          </div>
        </div>
      </div>

      {/* <Footer></Footer> */}
    </Fragment>
  );
};

export default ProductDetail;
