import { Fragment } from "react";
import classes from "./Contact.module.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact() {
  return (
    <Fragment>
      <div className={classes.contact}>
        <div className={classes.banner}>
          <div className={classes.bannertitle}>
            <h1>Contact</h1>
          </div>
        </div>
        <div className={classes.contactinf}>
          <div className={classes.rowcontact}>
            <div className={classes.address}>
              <div className={classes.addressicon}>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faMapMarkerAlt}
                />
              </div>
              <div className={classes.addressinf}>
                <h3>Our Address</h3>
                <p>
                  2A/64A Bach Dang Street, Ward 2, Tan Binh District, HCMC,
                  Vietnam
                </p>
              </div>
            </div>
            <div className={classes.address}>
              <div className={classes.addressicon}>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faPhoneVolume}
                />
              </div>
              <div className={classes.addressinf}>
                <h3>Contact</h3>
                <p>Mobile: +84 98 996 0578 </p>
                <p>
                  E-mail:
                  <span> info@innomizetech.com</span>
                </p>
              </div>
            </div>
            <div className={classes.address}>
              <div className={classes.addressicon}>
                <FontAwesomeIcon className={classes.icon} icon={faClock} />
              </div>
              <div className={classes.addressinf}>
                <h3>Hours of Operation (GMT +7)</h3>
                <p>Monday - Friday: 08:30 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.contactmap}>
          <div className={classes.mapheader}>
            <h3>GET IN TOUCH</h3>
            <p>Ready to Get Started?</p>
            <span>
              Your email address will not be published. Required fields are
              marked *
            </span>
          </div>
          <div className={classes.contactmaprow}>
            <div className={classes.map}>
              <img src="./inomizemap.png" alt="MAP" />
            </div>
            <div className={classes.contactform}>
              <h3>
                Tell us about your project and let’s explore our capabilities.
              </h3>
              <form className={classes.form}>
                <div className={classes.fullname}>
                  <label>
                    Full Name <span>*</span>
                  </label>
                  <input type="text" />
                </div>
                <div className={classes.company}>
                  <label>Company</label>
                  <input type="text" />
                </div>
                <div className={classes.phone}>
                  <label>Phone number</label>
                  <input type="text" />
                </div>
                <div className={classes.email}>
                  <label>
                    Email <span>*</span>
                  </label>
                  <input type="text" />
                </div>
                <div className={classes.message}>
                  <label>
                    Message <span>*</span>
                  </label>
                  <div className={classes.inputmessage}>
                    <textarea
                      className={classes.text}
                      type="textarea"
                      rows="4"
                      cols="50"
                    />
                    <select className={classes.select}>
                      <option>What did you hear about us</option>
                      <option value="Facebook">Facebook</option>
                    </select>
                    <button type="submit" className={classes.button}>
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
