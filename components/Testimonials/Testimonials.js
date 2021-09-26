import classes from "./Testimonials.module.css";
import { Fragment } from "react";
function Testimonials() {
  return (
    <Fragment>
      <div className={classes.testimonials}>
        <div className={classes.container}>
          <header className={classes.testimonialstitle}>
            <h2>TESTIMONIALS</h2>
            <p className={classes.testimonialssubtitle}>
              What Our Clients are Saying?
            </p>
          </header>
          <div className={classes.row}>
          <div className={classes.testimonialsdesc}>
            <div className={classes.colleft}>
              <img
                className={classes.arrleft}
                src="./arrowLeft.png"
                alt="arrowLeft"
              />
            </div>
            <div className={classes.col30}>
              <img src="./Ray.png" alt="Ray" />
            </div>
            <div className={classes.col50}>
              <p className={classes.card}>Ray Antonio</p>
              <p className={classes.cardinf}>CEO at Permits.com</p>
              <p className={classes.cardcontent}>
                Our experience partnering with Innomize has been great. The team
                does an excellent job of aligning expectations and they are
                attentive to our outreach throughout the build. What stands out
                for me most is a time that we needed significant changes made
                (our fault) within two days of demoing a Fortune 40. The team at
                Innomize jumped on calls at all hours of the night (their time)
                and worked tirelessly to get us ready. They get what it means to
                be partners in success and we are grateful to have them as an
                extension of our team.
              </p>
            </div>
            </div>
            <div className={classes.testimonialscircle}></div>
            <div className={classes.colright}>
              <img
                className={classes.arrright}
                src="./arrowRight.svg"
                alt="arrowRight"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Testimonials;
