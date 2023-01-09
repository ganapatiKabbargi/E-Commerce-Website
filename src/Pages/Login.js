import React, { useContext, useRef, Fragment } from "react";
import axios from "axios";
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

    const loginAuthentication = async () => {
      try {
        const response = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJGXTQIbPZJBDGfZoc5fP6lNVi8DOUE2M",
          {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }
        );
        if (response.status === 200) {
          const data = await response.data;
          console.log(data);
          cartCtx.login(data.idToken);
          cartCtx.addEmail(enteredEmail.replace(/[@.]/g, ""));
          history.replace("/store");
        } else {
          let errorMessage = "authentication failed";
          throw new Error(errorMessage);
        }
      } catch (err) {
        alert(err.message);
      }
    };

    loginAuthentication();
  };

  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <div
        className="form-div shadow"
        style={{ background: "linear-gradient(to right , #283c86,#45a247" }}
      >
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
