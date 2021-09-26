
import { Fragment } from "react";
import classes from "./OurBlogArea.module.css";

function OurBlog() {
  return (
    <Fragment>
      <div className={classes.blogarea}>
        <div className={classes.container}>
          <div className={classes.blogareacontent}>
            <h3>We Like to Start Your Project With Us</h3>
            <button className={classes.blogareabutton}>Contact Us</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default OurBlog;
