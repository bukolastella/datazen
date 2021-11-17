import React from "react";
import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={classes.Auth}>
      <div className={classes.main}>
        <div className={classes.left}></div>
        <form className={classes.right}>
          <div className={classes.title}>
            <span>MACTAY</span>
            <span>consulting</span>
          </div>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit"> Login</button>
          <span>forgot password</span>
        </form>
      </div>
    </div>
  );
};

export default Auth;
