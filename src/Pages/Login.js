import React, { useContext, useRef, Fragment } from "react";

import { useHistory } from "react-router-dom";
import NavigationBar from "../Components/Navbar/Navbar";
import CartContext from "../Store/cartContext";
import "./Login.css";

const Login = () => {
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const cartCtx = useContext(CartContext);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredEmail);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8LZSBgx3kdlSkRdOGTGLxYs9e1Qopdl0",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then((data) => {
            let errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        cartCtx.login(data.idToken);
        cartCtx.addEmail(enteredEmail.replace(/[@.]/g, ""));
        history.replace("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <div className="form-div shadow">
        <h2 className="text-center">login</h2>
        <form onSubmit={submitHandler}>
          <div className="control">
            <label>Email</label>
            <input type="email" ref={emailInputRef}></input>
          </div>
          <div className="control">
            <label>Password</label>
            <input type="password" ref={passwordInputRef}></input>
          </div>
          <div className="actions">
            <button>Login</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
