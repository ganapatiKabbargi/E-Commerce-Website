import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../Components/Navbar/Navbar";
import Header from "../Components/Navbar/Header";
import Footer from "../Components/Footer/Footer";
import Title from "../Components/Title/Title";

const About = () => {
  return (
    <Fragment>
      <div>
        <NavigationBar></NavigationBar>
        <Header></Header>
        <Container>
          <Title>About Us</Title>
          <Row>
            <Col xs={6}>
              <img
                src="https://plus.unsplash.com/premium_photo-1664298415497-60325b13618f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBiYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="music band"
              ></img>
            </Col>
            <Col xs={6}>
              <div className="p-2 border fw-bolder">
                <p>
                  band, (from Middle French bande, “troop”), in music, an
                  ensemble of musicians playing chiefly woodwind, brass, and
                  percussion instruments, in contradistinction to an orchestra,
                  which contains stringed instruments. Apart from this specific
                  designation, the word band has wide vernacular application,
                  from generalized usage (as in “dance band” and “jazz band”) to
                  the very specific (as in “harmonica band,” “brass band,” and
                  “string band”). The term was first used in England to apply to
                  the “kings band” of 24 violins at the court of Charles II
                  (reigned 166085), a group modelled on Louis XIVs famous group
                  of violins.band, (from Middle French bande, “troop”), in
                  music, an ensemble of musicians playing chiefly woodwind,
                  brass, and percussion instruments, in contradistinction to an
                  orchestra, which contains stringed instruments. Apart from
                  this specific designation, the word band has wide vernacular
                  application, from generalized usage (as in “dance band” and
                  “jazz band”) to the very specific (as in “harmonica band,”
                  “brass band,” and “string band”).
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default About;
