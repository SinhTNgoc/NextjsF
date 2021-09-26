import React from "react";
import { Fragment } from "react";
import classes from "./CaseStudiesDetailBanner.module.css";
function CaseStudiesDetailBanner() {
  return (
    <Fragment>
      <div className={classes.banner}>
        <div className={classes.bannertitle}>
          <h2>One-on-One Tutoring Platform Case Studies</h2>
        </div>
      </div>
    </Fragment>
  );
}

export default CaseStudiesDetailBanner;