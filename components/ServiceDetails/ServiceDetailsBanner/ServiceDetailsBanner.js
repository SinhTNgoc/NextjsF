
import { Fragment } from "react";
import classes from "./ServiceDetailsBanner.module.css";
function ServiceDetailsBanner() {
  return (
    <Fragment>
      <section className={classes.banner}>
        <div className={classes.bannertitle}>
          <h2>Technologies & Business Domains</h2>
        </div>
      </section>
    </Fragment>
  );
}

export default ServiceDetailsBanner;
