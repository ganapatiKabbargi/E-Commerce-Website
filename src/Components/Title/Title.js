import React from "react";

const Title = (props) => {
  return (
    <div
      className="title my-3 p-2 fs-4 fw-bold  rounded"
      style={{
        width: "300px",
        borderLeft: "5px solid red",
        backgroundColor: "#90ee90",
      }}
    >
      {props.children}
    </div>
  );
};

export default Title;
