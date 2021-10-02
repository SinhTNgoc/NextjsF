import { Fragment } from "react";
import classes from "./CaseStudiesBanner.module.css";

function CaseStudiesBanner() {
  return (
    <Fragment>
      <div className={classes.banner}>
        <div className={classes.bannertitle}>
          <h2>Case Studies</h2>
        </div>
      </div>
    </Fragment>
  );
}

export default CaseStudiesBanner;
