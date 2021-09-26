
import { Fragment } from "react";
import classes from "./ServiceDetails.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import ServiceDetailsBanner from "../ServiceDetails/ServiceDetailsBanner/ServiceDetailsBanner";
function ServiceDetails() {
  return (
    <Fragment>
      <section className={classes.servicedetail}>
        <div className={classes.container}>
          <h3>Business Domains</h3>
          <div className={classes.row}>
            <div className={classes.col25}>
              <div className={classes.img}>
                <img src="./flationhouse2.png" alt="House" />
                <p>ERP</p>
              </div>
            </div>
            <div className={classes.col25}>
              <div className={classes.img}>
                <img src="./flationhouse2.png" alt="House" />
                <p>Healthcare</p>
              </div>
            </div>
            <div className={classes.col25}>
              <div className={classes.img}>
                <img src="./flationhouse2.png" alt="House" />
                <p>E-commerce</p>
              </div>
            </div>
            <div className={classes.col25}>
              <div className={classes.img}>
                <img src="./flationhouse2.png" alt="House" />
                <p>Finance</p>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col25}>
              <div className={classes.img}>
                <img src="./flationhouse2.png" alt="House" />
                <p>Real Estate</p>
              </div>
            </div>
            <div className={classes.col25}>
              <div className={classes.img}>
                <img src="/flationhouse2.png" alt="House" />
                <p>Fitness</p>
              </div>
            </div>
            <div className={classes.col25}>
              <div className={classes.img}>
                <img src="./flationhouse2.png" alt="House" />
                <p>E-Learning</p>
              </div>
            </div>
            <div className={classes.col25}>
              <div className={classes.img}>
                <img src="./flationhouse2.png" alt="House" />
                <p>Retails</p>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col25}>
              <div className={classes.img}>
                <img src="./flationhouse2.png" alt="House" />
                <p>Law</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.tech}>
            <div className={classes.rowtextsub}>
              <h3>Web Technologies</h3>
              {/* <FontAwesomeIcon className={classes.font} icon={faMinus} /> */}
            </div>
            <div className={classes.row}>
              <div className={classes.col50}>
                <ul className={classes.text}>
                  <li>
                    <span>Serverless Architecture</span>
                    <img src="./serverless.jpeg" alt="ServerlessAchr" />
                  </li>
                  <li>
                    <span>Nodejs</span>
                    <img src="./nodejs.png" alt="Nodejs" />
                  </li>
                  <li>
                    <span>SpringMVC/SpringBoot</span>
                    <img src="./springmvc.png" alt="SpringMvc" />
                    <img src="./springboot.png" alt="Springboot" />
                  </li>
                  <li>
                    <span>Ruby on Rails</span>
                    <img src="./rubyrail.png" alt="rubyrail" />
                  </li>
                </ul>
              </div>

              <div className={classes.col50}>
                <ul className={classes.text}>
                  <li>
                    <span>.NET MVC/ASP.NET</span>{" "}
                    <img src="/net.png" alt="NetMicrosoft" />
                  </li>
                  <li>
                    <span>Angular, React, React Native</span>
                    <img src="./angular.png" alt="Angular" />
                    <img src="./react.png" alt="React" />
                  </li>
                  <li>
                    <span>MySQL, Postgres, NoSQL</span>
                    <img src="./mysql.png" alt="Mysql" />
                    <img src="./postgreSql.svg" alt="PostgreSQL" />
                    <img src="./sql.png" alt="SQL" />
                  </li>
                  <li>
                    <span>Jenkins, Ansible, Docker</span>
                    <img src="./jenkin.jpeg" alt="Jenkin" />
                    <img src="./ansible.png" alt="Ansible" />
                    <img src="./docker.png" alt="Docker" />
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.rowtext}>
              <div className={classes.rowtextsub}>
                <p>Mobile Technologies</p>
                {/* <FontAwesomeIcon className={classes.font} icon={faPlus} /> */}
              </div>
            </div>
            <div className={classes.rowtext}>
              <div className={classes.rowtextsub}>
                <p>Testing Technologies</p>
                {/* <FontAwesomeIcon className={classes.font} icon={faPlus} /> */}
              </div>
            </div>
            <div className={classes.rowtext}>
              <div className={classes.rowtextsub}>
                <p>Programming Languages</p>
                {/* <FontAwesomeIcon className={classes.font} icon={faPlus} /> */}
              </div>
            </div>
            <div className={classes.rowtext}>
              <div className={classes.rowtextsub}>
                <p>DevOps</p>
                {/* <FontAwesomeIcon className={classes.font} icon={faPlus} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ServiceDetails;
