import React from "react";
import classes from "./ErrorModal.module.css";
import Modal from "./Modal";

const ErrorModal = (props) => {
  const clickHandler = () => {
    props.errorHandler();
  };
  let errormessage = "";
  if (props.message.includes("PASSWORD")) {
    errormessage = "Please Enter Valid Password";
  } else if (props.message.includes("EMAIL")) {
    errormessage = "Please Enter Valid Email";
  } else if (props.message.includes("Network")) {
    errormessage = "Please check your Internet Connection";
  } else if (props.message.includes("Authentication")) {
    errormessage = "You need to login to access this Page";
  } else {
    errormessage = props.message;
  }
  return (
    <React.Fragment>
      <Modal />
      <div className={classes.errorCard}>
        <div className={classes.header}>
          <div
            className={
              props.message.includes("Succesfully")
                ? classes.image_success
                : classes.image
            }
          >
            {props.message.includes("Authentication") ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                fill="currentColor"
                className="bi bi-lock"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
                  id="mainIconPathAttribute"
                ></path>{" "}
              </svg>
            ) : props.message.includes("Succesfully") ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20 7L9.00004 18L3.99994 13"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            )}
          </div>
          <div className={classes.content}>
            <span
              className={
                props.message.includes("Succesfully")
                  ? classes.title_success
                  : classes.title
              }
            >
              {props.message}
            </span>
            <p className={classes.message}>{errormessage}</p>
          </div>
          <div className={classes.action}>
            <button
              className={classes.cancel}
              type="button"
              onClick={clickHandler}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
