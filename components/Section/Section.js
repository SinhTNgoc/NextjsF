import React from "react";
import classes from "./Section.module.css";
import { Fragment } from "react";

function Section() {
  return (
    <Fragment>
      <div className={classes.intro}>
        <div className={classes.container}>
          <div className={classes.mainbannercontain}>
            <h1>
              We provide
              <br />
              <span>optimized IT solutions</span>
              <br />
              for your business!
            </h1>
            <p>
              We are experts in Cloud computing, Web Development, Mobile
              Development, DevOps, and Automation Testing that help you meet
              your business needs.
            </p>
            <div className={classes.btngetservices}>
              <a href="#services">Our Services</a>
            </div>
            <div className={classes.mainbannericon}>
              <img src="/Group142.svg" alt="Group142" />
            </div>
          </div>
          <div className={classes.mainbannerimg}>
            <div className={classes.elip83}></div>
            <div className={classes.elip82}></div>
            <div className={classes.elip81}></div>
            <div className={classes.elip80}></div>
            <div className={classes.elip79}> </div>
            <div className={classes.elip78}></div>
            <div className={classes.elip77}> </div>
            <div className={classes.elip76}></div>
            <div className={classes.elip75}></div>
            <div className={classes.elip74}> </div>
            <div className={classes.elip73}> </div>
            <div className={classes.elip72}> </div>
            <div className={classes.elip71}> </div>
            <div className={classes.introbackground}> </div>
            <div className={classes.introimg}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Section;
