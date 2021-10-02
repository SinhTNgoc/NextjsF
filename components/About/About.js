import { Fragment } from "react";
import classes from "./About.module.css";
import Testimonials from "../Testimonials/Testimonials";
import BlogArea from "../OurBlogArea/OurBlogArea";

function About() {
  return (
    <Fragment>
      <div className={classes.about}>
        <div className={classes.row}>
          <div className={classes.title}>
            <h2>About us</h2>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.col50}>
              <div className={classes.imgillus1}>
                <img src="./ILLUS TOP.svg" alt="ILLUS1" />
              </div>
            </div>
            <div className={classes.col50}>
              <div className={classes.servicescontent}>
                <h3>Your Business Success Starts With Us</h3>
                <p>
                  We are an offshore software development and IT consulting
                  company based in Vietnam
                </p>
              </div>
              <div className={classes.row}>
                <div className={classes.col50}>
                  <ul className={classes.featurelist}>
                    <li>
                      <img src="./About-img1.png" alt="IMG 1" />
                      <div className={classes.featurelistdesc}>
                        <h3>15 Years</h3>
                        <p>Experiences</p>
                      </div>
                    </li>
                    <li>
                      <img src="./About-img3.png" alt="IMG 3" />
                      <div className={classes.featurelistdesc}>
                        <h3>15 Years</h3>
                        <p>Experiences</p>
                      </div>
                    </li>
                    <li>
                      <img src="./About-img3.png" alt="IMG 3" />
                      <div className={classes.featurelistdesc}>
                        <h3>15 Years</h3>
                        <p>Experiences</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={classes.col50}>
                  <ul className={classes.featurelist}>
                    <li>
                      <img src="./About-img2.png" alt="IMG 2" />
                      <div className={classes.featurelistdesc}>
                        <h3>15 Years</h3>
                        <p>Experiences</p>
                      </div>
                    </li>
                    <li>
                      <img src="/About-img4.png" alt="IMG 4" />
                      <div className={classes.featurelistdesc}>
                        <h3>15 Years</h3>
                        <p>Experiences</p>
                      </div>
                    </li>
                    <li>
                      <img src="./About-img4.png" alt="IMG 4" />
                      <div className={classes.featurelistdesc}>
                        <h3>15 Years</h3>
                        <p>Experiences</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.aboutus}>
        <div className={classes.container}>
          <header className={classes.headerSection}>
            <h2>Why Choose Us?</h2>
            <p>
              Our customers did not choose us by chance. They chose us by values
            </p>
          </header>
        </div>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.col}>
              <img
                className={classes.aboutimage}
                src="./component1.png"
                alt="component1"
              />
              <h4>Committed</h4>
              <p>
                Our team puts in the extra hours to deliver their work
                efficiently, wasting no time, exceeding expectations; going
                above and beyond and showing initiative to deliver quality
                solutions.
              </p>
            </div>
            <div className={classes.col}>
              <img
                className={classes.aboutimage}
                src="./component2.png"
                alt="component1"
              />
              <h4>Team Focused</h4>
              <p>
                We work hard, learn and share with each other.We always focused
                on delivering and optimizing solutions efficiently and
                efficiently and on-time.Focusing on quality is part of out
                culture.
              </p>
            </div>
            <div className={classes.col}>
              <img
                className={classes.aboutimage}
                src="./component3.png"
                alt="component3"
              />
              <h4>Responsible</h4>
              <p>
                Our engineers take their responsibility of leading our team
                seriously, and proactively work side-by-side with each developer
                to ensure solutions are expertly designed, developed and
                delivered.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.team}>
        <div className={classes.container}>
          <header className={classes.teamheader}>
            <h2 className={classes.teamintro}>Meet Our Team</h2>
            <p className={classes.introsubtitle}>
              We are a team of professional, passionate, enthusiastic and
              talented individuals with one goal - to bring more value to your
              business by delivering the tools you need to keep your business
              moving in the right direction.
            </p>
          </header>
        </div>
        <div className={classes.container}>
          <div className={classes.row1}>
            <div className={classes.colteam}>
              <div
                className={classes.teamimg}
                style={{
                  backgroundImage: "url(./HoangLe.png) ",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className={classes.teammember}>
                <h4>Hoang Le</h4>
                <p>Co-Founder, CEO</p>
              </div>
            </div>
            <div className={classes.colteam}>
              <div
                className={classes.teamimg}
                style={{
                  backgroundImage: "url(./PhongTran.png) ",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className={classes.teammember}>
                <h4>Phong Tran</h4>
                <p>Co-Founder, CEO</p>
              </div>
            </div>
          </div>
          <div className={classes.row2}>
            <div className={classes.colteam2}>
              <div
                className={classes.teamimg2}
                style={{
                  backgroundImage: "url(./ClarisseRoussel.png) ",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <h4>Clarisse Roussel</h4>
              <p>Business Development Manager</p>
            </div>
            <div className={classes.colteam2}>
              <div
                className={classes.teamimg2}
                style={{
                  backgroundImage: "url(./ChiaWeeKiatKelvin.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <h4>Chia Wee Kiat Kelvin</h4>
              <p>Overseas Partner Advisor</p>
            </div>

            <div className={classes.colteam2}>
              <div
                className={classes.teamimg2}
                style={{
                  backgroundImage: "url(./MikeJentes.png) ",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <h4>Mike Jentes</h4>
              <p>Sales Representative</p>
            </div>

            <div className={classes.colteam2}>
              <div
                className={classes.teamimg2}
                style={{
                  backgroundImage: "url(./HauNgo.png) ",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <h4>Hau Ngo</h4>
              <p>Technical Lead</p>
            </div>
            <div className={classes.colteam2}>
              <div
                className={classes.teamimg2}
                style={{
                  backgroundImage: "url(./HiepDinh.png) ",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <h4>Hiep Dinh</h4>
              <p>Technical Lead</p>
            </div>
            <div className={classes.colteam2}>
              <div
                className={classes.teamimg2}
                style={{
                  backgroundImage: "url(./TuanNguyen.png) ",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h4>Tuan Nguyen</h4>
              <p>Technical Lead</p>
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIALS */}
      <Testimonials />
      <BlogArea />
    </Fragment>
  );
}

export default About;
