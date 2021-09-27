import { Fragment } from "react";
import classes from "./Career.module.css";
import CareerBanner from "./CareerBanner/CareerBanner";

function Career() {
  return (
    <Fragment>
      <CareerBanner />
      <div className={classes.careerintro}>
        <div className={classes.container}>
          <div className={classes.ourculture}>
            <h3>Our Culture</h3>
            <p>
              InnomizeTech is actively looking for some developers for a
              fast-growing and expanding in the next year. As a start-up
              company, our team is our highest priority and we welcome new
              talent in our team. Along with our young spirit, our aim is to
              create an ideal and open environment where each person is eager to
              work and encouraged by the creative ability of every member of our
              team.
            </p>
            <p>
              At Innomize Tech, we believe that people are our company’s
              greatest asset as we continuously innovate to create a supportive
              environment that will accommodate our employee’s personal and
              professional development – an environment that is designed to
              foster growth that benefits both our people and our clients’
              success.
            </p>
            <p>
              As a start-up company, our team is our highest priority and we
              welcome new talent in our team. Along with our young spirit, our
              aim is to create an ideal & open environment where each person is
              eager to work and encouraged by the creative ability of every
              member of our team.
            </p>
          </div>
          <div className={classes.benefits}>
            <div className={classes.benefitscontent}>
              <h3>Benefits</h3>
              <ul>
                <li>Human development is first priority</li>
                <li>Challenging and interesting work</li>
                <li>Free and flexible workplace</li>
                <li>Yearly company trips</li>
                <li>Yearly company trips</li>
                <li>Salary review: twice / year</li>
                <li>Paid for Overtime (Rarely required)</li>
                <li>Career guidance and support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.activity}>
            <h2>We Word Hard, And Play Even Harder</h2>
            <div className={classes.imgrow}>
              <div className={classes.imgcontainer}>
                <div className={classes.arrowleft}>
                  <img src="./arrowLeft.png" alt="arrowleft" />
                </div>
                <div className={classes.activityimgs}>
                  <div className={classes.activityimgs1}>activityimgs1</div>
                  <div className={classes.activityimgs2}>activityimgs2</div>
                  <div className={classes.activityimgs3}>activityimgs3</div>
                  <div className={classes.activityimgs4}>activityimgs4</div>
                  <div className={classes.activityimgs5}>activityimgs5</div>
                </div>
                <div className={classes.arrowright}>
                  <img src="./arrowRight.svg" alt="arrowrightt" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Career;
