import React, { Fragment, useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import CartContext from "../Store/cartContext";
import { BsFillStarFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";

const ProductDetail = () => {
  const ctx = useContext(CartContext);
  const params = useParams();
  const history = useHistory();

  const product = ctx.productArr.filter((p) => {
    return p.id === params.productId;
  });
  const [matchedProduct] = product;

  const clickHandler = () => {
    ctx.addItem({ ...matchedProduct, quantity: 1 });
    ctx.notification(matchedProduct.title);
  };

  const purchaseHandler = () => {
    ctx.purchaseProduct();
  };

  const closePageHandler = () => {
    history.push("/store");
  };

  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <Container className="bg-light">
        <Row className="my-5 py-5">
          <Col xs={6} className="bg-white shadow rounded">
            <div className="">
              <img
                src={matchedProduct.imageUrl}
                alt="#"
                className="w-75 my-4"
              ></img>
            </div>
            <div className="d-flex justify-content-around mb-4">
              <div>
                {" "}
                <img
                  src={matchedProduct.imageUrl}
                  alt="@"
                  className="w-50"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  src={matchedProduct.imageUrl}
                  alt="!"
                  className="w-50"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  src={matchedProduct.imageUrl}
                  alt="$"
                  className="w-50"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  src={matchedProduct.imageUrl}
                  alt="&"
                  className="w-50 "
                ></img>
              </div>
            </div>
            <button
              className="btn w-50 shadow me-2 text-light fw-bold "
              style={{ backgroundColor: "#16b915" }}
              onClick={clickHandler}
            >
              Add to Cart <FaCartPlus />
            </button>
            <button
              className="btn  shadow text-light fw-bold"
              onClick={purchaseHandler}
              style={{ width: "300px", backgroundColor: "#ff1d00" }}
            >
              Buy Now
            </button>
          </Col>
          <Col xs={6}>
            <div className="">
              <div className="d-flex justify-content-end">
                <button className="btn fs-5 fw-bold" onClick={closePageHandler}>
                  X
                </button>
              </div>
              <div className="px-5 py-2 my-5 border shadow rounded bg-white">
                <h4 style={{ color: "#ff2323" }}>{matchedProduct.title}</h4>
                <h5 className="text-success font-weight-bold">
                  Special Price %
                </h5>
                <h3>&#8377; {matchedProduct.price}</h3>
              </div>
              <div className="px-5 py-2 my-5 border shadow rounded  bg-white">
                <h3 className="text-primary">Available Offers</h3>
                <p>Special PriceGet at flat ₹{matchedProduct.price}T&C</p>
                <p>
                  Partner OfferSign up for Flipkart Pay Later and get Flipkart
                  Gift Card worth up to ₹500*Know More
                </p>
                <p>
                  Bank Offer10% off on Kotak Bank Credit Cards and Credit EMI
                  Trxns, up to ₹1,250. On orders of ₹5,000 and aboveT&C
                </p>
                <p>
                  Bank Offer10% instant discount on SBI Credit Card EMI
                  Transactions, up to ₹1,250 on orders of ₹5,000 and aboveT&C
                </p>
              </div>
              <div className="shadow py-1 rounded  bg-white">
                <div className="px-5  my-5  d-flex justify-content-between align-items-center ">
                  <h3 className="text-primary">Ratings and reviews</h3>
                  <div
                    className=" text-white rounded p-2 mt-1 w-25"
                    style={{ backgroundColor: "#00d100" }}
                  >
                    {" "}
                    <BsFillStarFill
                      size="20px"
                      className="mx-1"
                    ></BsFillStarFill>
                    <BsFillStarFill
                      size="20px"
                      className="mx-1"
                    ></BsFillStarFill>
                    <BsFillStarFill
                      size="20px"
                      className="mx-1"
                    ></BsFillStarFill>
                    <BsFillStarFill
                      size="20px"
                      className="mx-1"
                    ></BsFillStarFill>
                  </div>
                </div>
                <div className="my-4">
                  <div className="d-flex justify-content-around align-items-center">
                    <div
                      className=" text-white rounded p-2 mt-1 w-25 "
                      style={{ backgroundColor: "#00d100" }}
                    >
                      <BsFillStarFill
                        size="20px"
                        className="mx-1"
                      ></BsFillStarFill>
                      <BsFillStarFill
                        size="20px"
                        className="mx-1"
                      ></BsFillStarFill>
                      <BsFillStarFill
                        size="20px"
                        className="mx-1"
                      ></BsFillStarFill>
                      <BsFillStarFill
                        size="20px"
                        className="mx-1"
                      ></BsFillStarFill>
                      <BsFillStarFill
                        size="20px"
                        className="mx-1"
                      ></BsFillStarFill>
                    </div>
                    <span className="fs-5">Very Good Product</span>
                  </div>
                  <div className="my-2 ms-5">
                    <img
                      src={matchedProduct.imageUrl}
                      alt="*"
                      style={{ width: "60px", marginLeft: "30px" }}
                    ></img>
                    <img
                      src={matchedProduct.imageUrl}
                      alt="^"
                      style={{ width: "60px", marginLeft: "30px" }}
                    ></img>
                  </div>
                </div>
                <div className="my-4">
                  <div className="d-flex justify-content-around align-items-center">
                    <div
                      className=" text-white rounded p-2 mt-1 w-25 "
                      style={{ backgroundColor: "#00d100" }}
                    >
                      <BsFillStarFill
                        size="20px"
                        className="mx-1"
                      ></BsFillStarFill>
                      <BsFillStarFill
                        size="20px"
                        className="mx-1"
                      ></BsFillStarFill>
                      <BsFillStarFill
                        size="20px"
                        className="mx-1"
                      ></BsFillStarFill>
                      <BsFillStarFill
                        size="20px"
                        className="mx-1"
                      ></BsFillStarFill>
                      <BsFillStarFill
                        size="20px"
                        className="mx-1"
                      ></BsFillStarFill>
                    </div>
                    <span className="fs-5">Very Good Product</span>
                  </div>
                  <div className="my-2 ms-5">
                    <img
                      src={matchedProduct.imageUrl}
                      alt="("
                      style={{ width: "60px", marginLeft: "30px" }}
                    ></img>
                    <img
                      src={matchedProduct.imageUrl}
                      alt=")"
                      style={{ width: "60px", marginLeft: "30px" }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Fragment>
  );
};

export default ProductDetail;
