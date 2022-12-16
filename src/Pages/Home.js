import React, { Fragment } from "react";
import NavigationBar from "../Components/Navbar/Navbar";
import Header from "../Components/Navbar/Header";
import Footer from "../Components/Footer/Footer";
import { BsPlayCircle } from "react-icons/bs";
import Title from "../Components/Title/Title";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <div className="text-center my-5 p-2 ">
        <button className="btn btn-outline-primary">
          Get Our Latest Album
        </button>
      </div>
      <div className="text-center py-2 ">
        <a href="#" className="">
          <BsPlayCircle size="80px" />
        </a>
      </div>

      <Container className="my-5 ">
        <Title>Tours</Title>
        <Row className="border-bottom border-3 border-primary py-2 mt-5  m-auto w-75 ">
          <Col xs={3}>JUL 16</Col>
          <Col xs={3}>DETROIT, MI</Col>
          <Col xs={3}>DTE ENERGY MUSIC THEATRE</Col>
          <Col xs={3}>
            <button className="btn btn-outline-primary w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
        <Row className="border-bottom border-3 border-primary py-2  m-auto w-75">
          <Col xs={3}>JULY 16</Col>
          <Col xs={3}>DETROIT, MI</Col>
          <Col xs={3}>DTE ENERGY MUSIC THEATRE</Col>
          <Col xs={3}>
            <button className="btn btn-outline-primary w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
        <Row className="border-bottom border-3 border-primary py-2 m-auto w-75">
          <Col xs={3}>JULY 16</Col>
          <Col xs={3}>DETROIT, MI</Col>
          <Col xs={3}>DTE ENERGY MUSIC THEATRE</Col>
          <Col xs={3}>
            <button className="btn btn-outline-primary w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
        <Row className="border-bottom border-3 border-primary py-2 m-auto w-75">
          <Col xs={3}>JULY 16</Col>
          <Col xs={3}>DETROIT, MI</Col>
          <Col xs={3}>DTE ENERGY MUSIC THEATRE</Col>
          <Col xs={3}>
            <button className="btn btn-outline-primary w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
        <Row className="border-bottom border-3 border-primary py-2 m-auto w-75">
          <Col xs={3}>JULY 16</Col>
          <Col xs={3}>DETROIT, MI</Col>
          <Col xs={3}>DTE ENERGY MUSIC THEATRE</Col>
          <Col xs={3}>
            <button className="btn btn-outline-primary w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
        <Row className=" py-2 m-auto w-75 ">
          <Col xs={3}>JULY 16</Col>
          <Col xs={3}>DETROIT, MI</Col>
          <Col xs={3}>DTE ENERGY MUSIC THEATRE</Col>
          <Col xs={3}>
            <button className="btn btn-outline-primary w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
