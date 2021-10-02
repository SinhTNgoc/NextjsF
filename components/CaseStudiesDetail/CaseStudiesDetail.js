import { Fragment } from "react";
import classes from "./CaseStudiesDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import CaseStudiesDetailBanner from "./CaseStudiesDetailBanner/CaseStudiesDetailBanner";

const CaseStudiesDetail = () => {
  return (
    <Fragment>
      <CaseStudiesDetailBanner />
      <div className={classes.container}>
        <div className={classes.introduction}>
          <div className={classes.information}>
            <div className={classes.details}>
              <div>
                <FontAwesomeIcon className={classes.icon} icon={faUser} />
                <span>Client</span>
              </div>
              <p>US Firm, E-Learning</p>
            </div>
            <div className={classes.details}>
              <div>
                <FontAwesomeIcon className={classes.icon} icon={faMapMarker} />
                <span>Location</span>
              </div>
              <p>New York, USA</p>
            </div>
            <div className={classes.details}>
              <div>
                <FontAwesomeIcon className={classes.icon} icon={faUser} />
                <span>Architecture</span>
              </div>
              <p>
                React, Amplify, AppSync, GraphQL, DynamoDB, Cognito, NodeJS,
                Chime, Route53
              </p>
            </div>
            <div className={classes.details}>
              <div>
                <FontAwesomeIcon className={classes.icon} icon={faUser} />
                <span>Technologies</span>
              </div>
              <p>Jenkins, CloudFormation, AWS CDK</p>
            </div>
            <div className={classes.details}>
              <div>
                <FontAwesomeIcon className={classes.icon} icon={faUser} />
                <span>DevOps</span>
              </div>
              <p>US Firm, E-Learning</p>
            </div>
            <div className={classes.details}>
              <div>
                <FontAwesomeIcon className={classes.icon} icon={faUser} />
                <span>Team size</span>
              </div>
              <ul>
                <li> Team Lead (01)</li>
                <li>Quality Control (01)</li>
                <li>Full-stack Developers (02)</li>
              </ul>
            </div>
          </div>
          <div className={classes.intropicture}>
            <img src="./introimage.png" alt="INTROIMAGE" />
          </div>
        </div>
        <div className={classes.casestudiesdetail}>
          <div className={classes.introdetail}>
            <h3>Executive Summary</h3>
            <p>
              InnomizeTech was tasked to build a web-based platform that allows
              one-on-one tutoring based on the specified subjects. In order to
              conduct a tutoring session, tutors need to establish their
              available time slots. Learners then will be able to select their
              preferred subjects and time slots. The system helps to connect
              subject experts and learners who have lack their confidence in a
              specific expertise, or who want to improve their knowledge and
              skills. A tutoring session will be conducting via online video
              conferencing style in real-time with the supporting features such
              as screen sharing, camera on-off switching, and chatting.
            </p>
          </div>
          <div className={classes.introdetail}>
            <h3>About Customer</h3>
            <p>
              Our customer is a US-based company offering educational services
              in the US market. With more than 15 years of successfully helping
              and serving thousands of students, they now want to offer their
              excellent services to the global audiences by launching an online
              one-on-one tutoring web application, which is one of the platforms
              in their online education ecosystem.
            </p>
            <p>
              With the providing of a large collections of subjects as well as
              associated experts, the system aims to achieve millions of
              successful tutoring sessions per month for learners in different
              walks of life in irrespective of timezones and locations.
            </p>
          </div>
          <div className={classes.introdetail}>
            <h3>The Challenges</h3>
            <p>
              Online tutoring system at a single glance seems to be just another
              traditional website. However, during the requirement analysis
              phase with our customer, we discovered that there would be further
              potential challenges that could seriously cause an interruption of
              our customer’s services, which also mean leading to the lack of
              trust from those who are using the tutoring service. Some of the
              challenges that we need to be extremely careful taking into
              account:
            </p>
            <ul>
              <li>
                Smoothly and seamlessly serving millions of tutoring sessions
                concurrently
              </li>
              <li>
                Video streaming should be able to be optimized for slow internet
                connections
              </li>
              <li>
                In case of unexpected interruption of internet connection during
                a tutoring session, saving and resuming the most recent video
                streaming should be feasible.
              </li>
              <li>
                Learners and tutors might be in different timezones. Which means
                there should be under background timezone converting without
                causing any confusion for user experience.
              </li>
              <li>
                Payment details and other private information should be secured
                with the highest technological supports.
              </li>
              <li>
                The system should be able to seamlessly integrate with other
                existing LMS systems such as Blackboard, Canvas, and Moodle.
              </li>
              <li>
                Learners should be able to be suggested the most relevant tutors
                based on their preferred subjects and other’s factors.
              </li>
            </ul>
            <p>Industry: Education, E-Learning</p>
          </div>
          <div className={classes.introdetail}>
            <h3>The Solutions</h3>
            <p>
              In order to meet our customer’s business requirements as well as
              other non-functional requirements, we need to apply existing
              technologies/frameworks as well as develop our in-house
              technologies:
            </p>

            <ul>
              <li>Cloud server: Amazon Web Services</li>
              <li>Architecture: Serverless</li>
              <li>
                Technologies/frameworks: React, Amplify, AppSync, GraphQL,
                DynamoDB, Cognito, NodeJS, Chime, Route53
              </li>
              <li>In-house technologies:</li>
            </ul>
            <p>
              Framing Optimizer: for optimizing video frames in slow internet
              connections Collaborative filtering Algorithms: for suggesting the
              most relevant tutors to learners External Adapter: for converting
              neutral data formats to integrate with other LMS systems
            </p>
          </div>
          <div className={classes.introimg}>
            <img src="./castudydetail.png" alt="IMG" />
          </div>
          <div className={classes.introdetail}>
            <h3>Results</h3>
            <p>The project goes live and exceeds our customer expectations:</p>
            <ul>
              <li>
                The system can scale up to serving millions of tutoring sessions
                concurrently
              </li>
              <li>
                Tutors and students from different timezones can interact
                without any interruption
              </li>
              <li>
                Technologies/frameworks: React, Amplify, AppSync, GraphQL,
                DynamoDB, Cognito, NodeJS, Chime, Route53
              </li>
              <li>
                With the support of Amazon Cognito, user’s data is highly
                secured
              </li>
              <li>
                EC2 instances can be used as hosts to optimize for video
                streaming
              </li>
              <li>
                The system can process thousands of data records without causing
                any issues
              </li>
              <li>The customer revenue has increased 70%</li>
            </ul>
            <p>
              Framing Optimizer: for optimizing video frames in slow internet
              connections Collaborative filtering Algorithms: for suggesting the
              most relevant tutors to learners External Adapter: for converting
              neutral data formats to integrate with other LMS systems
            </p>
          </div>
        </div>
        {/* <div className={classes.itroresultimg}>
          <div className={classes.row}>
            <div className={classes.cardimg}>
              <p>Project photo</p>
              <img />
            </div>
            <div className={classes.cardimg}>
              <p>Project photo</p>
              <img />
            </div>
            <div className={classes.cardimg}>
              <p>Project photo</p>
              <img />
            </div>
            <div className={classes.cardimg}>
              <p>Project photo</p>
              <img />
            </div>
          </div>
        </div> */}
        <div className={classes.introdetail}>
          <h4 className={classes.introdetailtitle}>More stories you might like</h4>
          <div className={classes.row}>
            <div className={classes.cardimgrelated}>
              <img src="./project1.png" alt="" />
              <h3>Permits Platform</h3>
              <span className={classes.line}></span>
              <p>Platform Project</p>
            </div>
            <div className={classes.cardimgrelated}>
              <img src="./project2.png" alt="" />
              <h3>1-1 Tutoring Platform</h3>
              <span className={classes.line}></span>
              <p>Web Project</p>
            </div>
            <div className={classes.cardimgrelated}>
              <img src="./project3.png" alt="" />
              <h3>TOTTER - ODOO System</h3>
              <span className={classes.line}></span>
              <p>ERP Project</p>
            </div>
          </div>
          <div className={classes.arrow}>
            <p>See All Projects</p>
            <img src="./Arrow.svg" alt="Arrow"></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CaseStudiesDetail;
