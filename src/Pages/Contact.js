import React, { Fragment, useState } from "react";
import NavigationBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import classes from "./Contact.module.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const mailHandler = (e) => {
    setMail(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, phone);
    const userDetails = {
      name: name,
      email: email,
      phoneNumber: phone,
    };
    props.userDetail(userDetails);
    setName("");
    setPhone("");
    setMail("");
  };
  return (
    <Fragment>
      <NavigationBar></NavigationBar>

      <div className={classes.container}>
        <div className={classes.sub_container}>
          <form onSubmit={submitHandler} className={classes.contact_form}>
            <div className="row mb-3 d-flex justify-content-center ">
              <div className="col-xs-6">
                <label htmlFor="name" className="col-sm-2 col-form-label  ">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control py-2"
                  id="name"
                  value={name}
                  onChange={nameHandler}
                />
              </div>
            </div>
            <div className="row mb-3 d-flex justify-content-center ">
              <div className="col-xs-6">
                <label htmlFor="email" className="col-sm-2 col-form-label ">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control py-2"
                  id="email"
                  value={email}
                  onChange={mailHandler}
                />
              </div>
            </div>
            <div className="row mb-3 d-flex justify-content-center ">
              <div className="col-xs-6">
                <label htmlFor="phone" className="col-sm-2 col-form-label ">
                  PhoneNumber
                </label>
                <input
                  type="number"
                  className="form-control py-2"
                  id="phone"
                  value={phone}
                  onChange={phoneHandler}
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className={classes.submit}>
                Submit
              </button>
            </div>
          </form>
          <div className={classes.contact}>
            <h1>Lets Talk About Everything</h1>
            <p style={{ fontSize: "20px" }}>
              For Any Queries Contact us by filling the form...we will get back
              to you as earliest
            </p>
            <button type="submit" className={classes.learnmore_btn}>
              learn more
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Contact;
