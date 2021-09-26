import React from "react";
import { Fragment } from "react";
import classes from "./ServiceBanner.module.css";
function ServiceBanner() {
  return (
    <Fragment>
      <section className={classes.banner}>
        <div className={classes.bannertitle}>
          <h2>Our Services</h2>
        </div>
      </section>
    </Fragment>
  );
}

export default ServiceBanner;
