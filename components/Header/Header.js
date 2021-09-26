import React from "react";
import classes from "./Header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
function Header() {
  return (
    <Fragment>
      <section className={classes.header}>
        <div className={classes.container}>
          <div className={classes.row}>
            <a className={classes.logo}>
              <Link href="/">
                <img src="/logo.svg" alt="Innomize logo" />
              </Link>
            </a>
            <ul className={classes.mainnavleft}>
              <li className={classes.mainnavleftitem}>
                <Link href="/services">
                  <a className={classes.active}>Services</a>
                </Link>
              </li>
              <li className={classes.dropdown}>
                <i>
                  <img src="/Dropdown.svg" alt="Dropdown" />
                  <div className={classes.dropdownmenu}>
                    <ul className={classes.dropdownitem}>
                      <li>
                        <Link href="/services">
                          <a>Our Services</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-details">
                          <a>Technologies & Business Domains</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </i>
              </li>
              <li className={classes.mainnavleftitem}>
                <Link href="/case-studies">Case studies</Link>
              </li>
              <li className={classes.mainnavleftitem}>
                <Link href="/blogs">
                  <a>Blog</a>
                </Link>
              </li>
              <li className={classes.mainnavleftitem}>
                <Link href="/about-us">About us</Link>
              </li>
              <li className={classes.mainnavleftitem}>
                <Link href="/career">
                  <a>Career</a>
                </Link>
              </li>
            </ul>
            <div className={classes.mainnavright}>
              <a href="#contact">Contact Us</a>
            </div>
            <label className={classes.mainnavicon} htmlFor="nav bar input">
              <FontAwesomeIcon className={classes.navbarsicon} icon={faBars} />
            </label>
            <input
              className={classes.navinput}
              type="checkbox"
              id="nav bar input"
            />
            <label
              htmlFor="nav bar input"
              className={classes.navoverlay}
            ></label>
            <div className={classes.mainnavmobile}>
              <label
                htmlFor="nav bar input"
                className={classes.mainnavmobileicon}
              >
                <FontAwesomeIcon
                  className={classes.navmobileicon}
                  icon={faTimes}
                />
              </label>
              <ul className={classes.mainnav}>
                <li className={classes.mainnavcategory}>
                  <Link href="/services">
                    <a className={classes.active}>Services</a>
                  </Link>
                </li>
                <li className={classes.mainnavcategory}>
                  <Link href="/case-studies">Case studies</Link>
                </li>
                <li className={classes.mainnavcategory}>
                  <a href="/blogs">Blog</a>
                </li>
                <li className={classes.mainnavcategory}>
                  <Link href="/about-us">About us</Link>
                </li>
                <li className={classes.mainnavcategory}>
                  <a href="#Career">Career</a>
                </li>
                <li className={classes.mainnavcategory}>
                  <a href="#Career">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* NAV MOBILE-TABLET */}
        <div className={classes.mainnavmobile}>
          <div className={classes.mainnavmobileicon}>
            <FontAwesomeIcon className={classes.navmobileicon} icon={faTimes} />
          </div>
          <ul className={classes.mainnav}>
            <li className={classes.mainnavcategory}>
              <Link href="/services">
                <a className={classes.active}>Services</a>
              </Link>
            </li>
            <li className={classes.mainnavcategory}>
              <Link href="/case-studies">Case studies</Link>
            </li>
            <li className={classes.mainnavcategory}>
              <a href="#services">Blog</a>
            </li>
            <li className={classes.mainnavcategory}>
              <Link href="/about-us">About us</Link>
            </li>
            <li className={classes.mainnavcategory}>
              <a href="#Career">Career</a>
            </li>
            <li className={classes.mainnavcategory}>
              <a href="#Career">Contact us</a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
}
export default Header;
