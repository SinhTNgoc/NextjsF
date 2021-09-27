import classes from "./Main.module.css";
import { Fragment } from "react";
import Testimonials from "../../components/Testimonials/Testimonials";
import Services from "../../components/Services/Services";
import OurBlogArea from "../../components/OurBlogArea/OurBlogArea";

function Main() {
  return (
    <Fragment>
      {/* ABOUT */}
      <div className={classes.about}>
        <div className={classes.container}>
          <header className={classes.headersection}>
            <h2 className={classes.aboutintro}>OUR CORE VALUES</h2>
            <p className={classes.sectionintro}>
              Founded in 2018, our mission is to create awesome products that
              will make your everyday life easier. Our experienced engineering
              and development team are committed, passionate, and continually
              challenge themselves on the advancements and changes of the
              technologies we utilize to deliver the most up-to-date and
              innovative solutions.
            </p>
          </header>
        </div>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.intro}>
              <img
                className={classes.introimg}
                src="./component1.png"
                alt="component1"
              />
              <h4 className={classes.introitem}>Committed</h4>
              <p className={classes.introdetail}>
                Our team puts in the extra hours to deliver their work
                efficiently, wasting no time, exceeding expectations; going
                above and beyond and showing initiative to deliver quality
                solutions.
              </p>
            </div>
            <div className={classes.intro}>
              <img
                className={classes.introimg}
                src="./component2.png"
                alt="component1"
              />
              <h4 className={classes.introitem}>Team Focused</h4>
              <p className={classes.introdetail}>
                We work hard, learn and share with each other. We always focused
                on delivering and optimizing solutions efficiently and
                efficiently and on-time. Focusing on quality is part of out
                culture.
              </p>
            </div>
            <div className={classes.intro}>
              <img
                className={classes.introimg}
                src="./component3.png"
                alt="component3"
              />
              <h4 className={classes.introitem}>Responsible</h4>
              <p className={classes.introdetail}>
                Our engineers take their responsibility of leading our team
                seriously, and proactively work side-by-side with each developer
                to ensure solutions are expertly designed, developed and
                delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SERVICES */}
      <Services />
      {/* RECENT PROJECT */}
      <div className={classes.project}>
        <div className={classes.container}>
          <header className={classes.headerrecent}>
            <h2 className={classes.recentproject}>Recent Projects</h2>
          </header>
        </div>
        <div className={classes.container}>
          <div className={classes.rowproject}>
            <div className={classes.colproject}>
              <img
                className={classes.imgproject}
                src="./project1.png"
                alt="project1"
              />
              <h4 className={classes.projectname}>Permits Platform</h4>
              <p className={classes.line}></p>
              <p className={classes.projectdes}>Platform Project</p>
            </div>
            <div className={classes.colproject}>
              <img
                className={classes.imgproject}
                src="./project2.png"
                alt="project2"
              />
              <h4 className={classes.projectname}>1-1 Tutoring Platform</h4>
              <p className={classes.line}></p>
              <p className={classes.projectdes}>Web Project</p>
            </div>
            <div className={classes.colproject}>
              <img
                className={classes.imgproject}
                src="./project3.png"
                alt="project3"
              />
              <h4 className={classes.projectname}>TOTTER - ODOO System</h4>
              <p className={classes.line}></p>
              <p className={classes.projectdes}>ERP Project</p>
            </div>
          </div>
          <div className={classes.arrow}>
            <p>See All Projects</p>
            <img src="./Arrow.svg" alt="Arrow" />
          </div>
        </div>
      </div>
      {/* TESTIMONIALS*/}
      <Testimonials />
      {/* OUR BLOG */}
      <div className={classes.ourblog}>
        <div className={classes.container}>
          <header className={classes.headerblog}>
            <h2 className={classes.blogname}>OUR BLOG</h2>
            <p className={classes.blogsubtitle}>Latest Valuable Insights</p>
          </header>
        </div>

        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.col1}>
              <div
                className={classes.blogimg}
                // style={{
                //   backgroundImage: "url(/Web.png) ",
                //   backgroundRepeat: "no-repeat",
                //   backgroundSize: "cover",
                // }}
              ></div>
              <div className={classes.blogcontent}>
                <ul className={classes.blogcontentmeta}>
                  <li>
                    <div className={classes.blogcontentimg}>
                      <img src="./Hoang.png" alt="Hoang" />
                      <p className={classes.blogauthor}>Hoang Le</p>
                    </div>
                  </li>
                  <li className={classes.blogcontenttime}>April 30, 2020</li>
                </ul>
                <p className={classes.blogcontentdes}>
                  Building serverless web crawler with Puppeteer on AWS Fargate
                </p>
              </div>
            </div>
            <div className={classes.col1}>
              <div
                className={classes.blogimg}
                // style={{
                //   backgroundImage: "url(/code.png) ",
                //   backgroundRepeat: "no-repeat",
                //   backgroundSize: "cover",
                // }}
              ></div>

              <div className={classes.blogcontent}>
                <ul className={classes.blogcontentmeta}>
                  <li>
                    <div className={classes.blogcontentimg}>
                      <img src="./Hoang.png" alt="Hoang" />
                      <p className={classes.blogauthor}>Hoang Le</p>
                    </div>
                  </li>
                  <li className={classes.blogcontenttime}>April 30, 2020</li>
                </ul>
                <p className={classes.blogcontentdes}>
                  Top reasons why AWS CDK over
                  <br /> CloudFormation
                </p>
              </div>
            </div>
            <div className={classes.col1}>
              <div
                className={classes.blogimg}
                // style={{
                //   backgroundImage: "url(/Anible.jpeg) ",
                //   backgroundRepeat: "no-repeat",
                //   backgroundSize: "contain",
                // }}
              ></div>
              <div className={classes.blogcontent}>
                <ul className={classes.blogcontentmeta}>
                  <li>
                    <div className={classes.blogcontentimg}>
                      <img
                        className={classes.blogauthorimg}
                        src="./Hoang.png"
                        alt="Hoang"
                      />
                      <p className={classes.blogauthor}>Hoang Le</p>
                    </div>
                  </li>
                  <li className={classes.blogcontenttime}>April 30, 2020</li>
                </ul>
                <p className={classes.blogcontentdes}>
                  Continuous Delivery — Deploying a<br /> Node.js app to AWS EC2
                  using An...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BLOG AREA */}
      <OurBlogArea />
    </Fragment>
  );
}
export default Main;
