import React, { Fragment } from "react";
import NavigationBar from "../Components/Navbar/Navbar";
import storeImage from "../assets/store2.jpeg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Home.module.css";

const Home = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push("/store");
  };
  const aboutHandler = () => {
    history.push("/about");
  };
  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <div style={{ position: "relative" }}>
        <img src={storeImage} className={classes.homeImg}></img>
        <div className={classes.heading}>
          <div>A New Online Shop Experience</div>

          <button className={classes.btn} onClick={clickHandler}>
            Get Started
          </button>
          <button className={classes.btn2} onClick={aboutHandler}>
            Learn More
          </button>
        </div>

        <div className={classes.backdrop}></div>
      </div>
      {/* <Footer></Footer> */}
    </Fragment>
  );
};

export default Home;
