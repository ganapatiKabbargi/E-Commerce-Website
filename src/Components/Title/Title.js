import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="title my-3 p-2 fs-4 fw-bold bg-light rounded ">
      {props.children}
    </div>
  );
};

export default Title;
