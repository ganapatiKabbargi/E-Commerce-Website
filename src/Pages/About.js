import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import classes from "./About.module.css";

const About = () => {
  return (
    <Fragment>
      <div>
        <NavigationBar></NavigationBar>
        {/* <Header></Header> */}
        <Container style={{ marginTop: "100px" }}>
          {/* <Title>About Us</Title> */}
          <Row style={{ marginBottom: "40px" }}>
            <Col xs={6}>
              <img
                src=" https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?size=626&ext=jpg&ga=GA1.2.771338071.1683088787&semt=ais"
                alt="music band"
              ></img>
            </Col>
            <Col
              xs={6}
              // className="d-flex justify-content-center align-items-center "
              className={classes.column}
            >
              <div>
                <div className={classes.container}>
                  <h2>More than Just an E-commerce store</h2>
                  <p style={{ fontSize: "20px" }}>
                    Customers access an online store to browse through and place
                    orders for products or services via their own devices.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/E-commerce"
                    target="_blank"
                    className={classes.link}
                  >
                    learn more
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className={classes.column}>
              <div
              // className="pt-2   fw-bolder  d-flex justify-content-center align-items-center h-100"
              // style={{ borderRight: "5px solid grey", paddingRight: "30px" }}
              >
                <div
                  style={{
                    borderRight: "5px solid grey",
                    borderLeft: "none",
                  }}
                  className={classes.container}
                >
                  <h2>
                    Electronically buy or sell products on online service.
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    E-commerce (electronic commerce) is the buying and selling
                    of goods and services, or the transmitting of funds or data,
                    over an electronic network, primarily the internet.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/E-commerce"
                    target="_blank"
                    // className="btn my-2 py-2  fs-5 mt-4"
                    className={classes.link}
                  >
                    learn more
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <img
                src="https://img.freepik.com/free-photo/person-adding-clothes-cart-closeup-online-shopping-campaign_53876-98449.jpg?size=626&ext=jpg&ga=GA1.2.771338071.1683088787&semt=ais"
                alt="music band"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default About;
