import { Fragment } from "react";
import classes from "./BlogDetail.module.css";
import { ReactElement } from "react";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function BlogDetail() {
  return (
    <Fragment>
      <div className={classes.blogdetail}>
        <div className={classes.container}>
          <div className={classes.blogtitle}>
            <h1>Why Do You Need an MVP for Your Business?</h1>
            <div className={classes.blogauthor}>
              <div className={classes.createdat}>
                <FontAwesomeIcon className={classes.icon} icon={faCalendar} />
                <span>Jan 2, 2020</span>
              </div>
              <div className={classes.author}>
                <FontAwesomeIcon className={classes.icon} icon={faUser} />
                <span>Phong Tran</span>
              </div>
              <div className={classes.state}>
                <FontAwesomeIcon className={classes.icon} icon={faBars} />
                <span>General</span>
              </div>
            </div>
          </div>
          <div className={classes.blogdetaildesc}>
            <p className={classes.bddesc}>
              You have got a good idea for an application but don’t know where
              and how to get started? This is a good article for you. We’re are
              going to take the approach of starting quickly and building a
              minimal viable product (MVP).
            </p>
            <h3 className={classes.bdtitle}>
              What is a Minimum Viable Product (MVP)?
            </h3>
            <div className={classes.quote}>
              <span className={classes.quotedesc}>
                “The minimum viable product is that version of a new product
                which allows a team to collect the maximum amount of validated
                learning about customers with the least effort.”
              </span>
              <p className={classes.quoteauthor}>Eric Ries</p>
              <p className={classes.quoteauthoradd}>
                Author of The Lean Startup
              </p>
            </div>
            <div className={classes.mvpdetail}>
              <p className={classes.mvpdetaildesc}>
                MVP is the basic version of the new product with a certain set
                of core features to resolve a specific issue of the targeted
                customers. Companies such as Facebook, Twitter, Uber, Dropbox,
                Zappos started out with an MVP and become the largest
                applications and influential today.
              </p>
              <div className={classes.mvpimg}>
                <img src="./mvp2.jpeg" alt="MVP" />
              </div>
              <h3 className={classes.mvpdetailtitle}>
                So, why a business should start with an MVP?
              </h3>
            </div>
            <div className={classes.mvpadvantages}>
              <h4>1. Minimum time to market</h4>
              <p>
                Building a full-blown application that would require overcoming
                extreme technical hurdles and months of development. Instead,
                MVP development takes only a couple of months, which allows you
                to roll out your product fast and thus have better chances to
                prosper on the market.
              </p>
            </div>
            <div className={classes.mvpadvantages}>
              <h4>2. Early Feedback From Users</h4>
              <p>
                The original idea of Instagram was to allow people to check-in
                where they are on their mobile web app. But after it was
                launched, the leaders decided to change the concept to meet the
                expectations of users. Don’t wait until your application has
                full-blown features because your idea might not meet the
                expectations of users. Starting with an MVP and early get
                feedback and then improve your application.
              </p>
            </div>
            <div className={classes.mvpadvantages}>
              <h4>3. Reduce rework and minimize development costs</h4>
              <p>
                Turning an idea into a full-blown application and meet the
                user’s expectation will take a humungous amount of effort.
                Rework can never be totally eliminated. However, with the MVP
                approach, you can make it as less as possible. You know features
                that customers don’t want and improve from an early stage. So
                rather than revamping the entire product from scratch, you just
                need to make the basic fundamental changes to the product. By
                doing so, you ensure the smooth execution of your product then
                save much cost.
              </p>
            </div>
            <div className={classes.mvpadvantages}>
              <h4>4. Attract Investors</h4>
              <p>
                With an idea in your head and you are looking for investors.
                Believe me, it may sound not very promising for investors. One
                of the benefits of an MVP development is that you will have a
                rather serious perspective than just your thoughts to show to
                investors interested in funding you. This will definitely
                escalate your chances of being noticed and heard.
              </p>
            </div>
            <div className={classes.takeaway}>
              <h3>Takeaways</h3>
              <p>
                MVP development is always a safe and wise way to launch a new
                product. it helps you test your ideas in your chosen market
                before you create the full product. It also allows you to speed
                up time-to-market, maximize your budget, get early feedback,
                provide you valuable improvement ideas and analytical data.
              </p>
              <div className={classes.evaluate}>
                <div className={classes.CEO}>
                  <a href="#" className={classes.ceoimg}>
                    <img src="./Hoang2.jpeg" alt="Hoang" />
                  </a>
                  <a href="#" className={classes.ceodesc}>
                    <span>Hoang Le</span>
                    <p>Co-Founder, CEO</p>
                  </a>
                  <div className={classes.contact}>
                    <a href="#">
                      <img src="./facebook.svg" alt="Facebook" />
                    </a>
                    <a href="#">
                      <img src="./twitter.svg" alt="Twitter" />
                    </a>
                    <a href="#">
                      <img src="./linkedin.svg" alt="Linkedin" />
                    </a>
                    <a href="#">
                      <img src="./linkedin.svg" alt="Linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className={classes.relatedpost}>
                <h3>Related post</h3>
                <ul>
                  <li>
                    <a href="#">How to toggle Vpc configuration per stage?</a>
                  </li>
                  <li>
                    <a href="#">
                      Serverless fundamentals and how to build, test and deploy
                      Lambda function to AWS – Part 1
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Serverless fundamentals and how to build, test and deploy
                      Lambda function to AWS – Part 2
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Sending a message from NodeJS to Angular by Service Worker
                      and Web Push Notifications
                    </a>
                  </li>
                </ul>
              </div>
              <div className={classes.socialcontact}>
                <h3>Follow us on</h3>
                <ul className={classes.socialcontact}>
                  <li>
                    <a href="#" className={classes.socialcontactitem}>
                      <img
                        className={classes.facebookicon}
                        src="./facebook-.svg"
                        alt="Facebook"
                      />
                      <span className={classes.facebook}>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className={classes.socialcontactitem}>
                      <img
                        className={classes.linkedinicon}
                        src="./linkedin- .svg"
                        alt="LinkedIn"
                      />
                      <span className={classes.linkedin}>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className={classes.socialcontactitem}>
                      <img
                        className={classes.twittericon}
                        src="./twitter-png.png"
                        alt="Twitter"
                      />
                      <span className={classes.twitter}>Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={classes.recentpost}>
                <h3>Recent Posts</h3>
                <ul>
                  <li>
                    <a href="#">
                      How to set up a multi-version Odoo development environment
                      locally
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      How to apply Liquibase to AWS Serverless applications with
                      NX Dev Tools on a monorepo
                    </a>
                  </li>
                  <li>
                    <a href="#">A brief summary of JavaScript Learning Path</a>
                  </li>
                  <li>
                    <a href="#">
                      How to build serverless cursor-based pagination service on
                      the AWS Cloud
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BlogDetail;
