import React from "react";
import { Fragment } from "react";
import classes from "./CareerBanner.module.css";
function CareerBanner() {
  return (
    <Fragment>
      <div className={classes.banner}>
        <div className={classes.bannertitle}>
          <h2>Career</h2>
        </div>
      </div>
    </Fragment>
  );
}

export default CareerBanner;
