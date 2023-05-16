import React from "react";
import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.jimu_primary_loading}></div>
    </div>
  );
};

export default Loader;
