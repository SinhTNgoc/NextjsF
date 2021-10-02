import { Fragment } from "react";
import Link from "next/link";
import classes from "./CaseStudies.module.css";
function CaseStudies() {
  return (
    <Fragment>
      <div className={classes.project}>
        <div className={classes.container}>
          <div className={classes.intro}>
            <h3>
              We collaborate with clients in Vietnam, USA, Singapore, Malaysia,
              UK. Let’s consult some of Innomize’s work and achievements across
              our expertise
            </h3>
          </div>
          <div className={classes.containerproject}>
            <div className={classes.rowproject}>
              <div className={classes.colproject}>
                <Link href="/case-studies-detail">
                  {/* <a> */}
                  <img
                    className={classes.imgproject}
                    src="./project1.png"
                    alt="project1"
                  />
                  {/* </a> */}
                </Link>
                {/* <Link href="/case-studies-detail"> */}
                {/* <a> */}
                <h4 className={classes.projectname}>Permits Platform</h4>
                {/* </a> */}
                {/* </Link> */}
                <p className={classes.line}></p>
                {/* <Link href="/case-studies-detail">
                <a> */}
                <p className={classes.projectdes}>Platform Project</p>
                {/* </a>
              </Link> */}
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
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CaseStudies;
