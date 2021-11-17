import React from "react";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div>
      <div className={classes.title}>
        <span>MACTAY</span>
        <span>consulting</span>
      </div>

      <div>
        <i></i>
        <span>clients</span>
      </div>
      <div>
        <i></i>
        <span>candidates</span>
      </div>
      <div>
        <i></i>
        <span>Address</span>
      </div>
    </div>
  );
};

export default Menu;
