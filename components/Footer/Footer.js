
import classes from "./Footer.module.css";
import { Fragment } from "react";
function Footer() {
  return (
    // <Fragment>
    //   <div className={classes.footer}>
    //     <div className={classes.footerbackground}></div>
    //     <div className={classes.container}>
    //       <div className={classes.rowfluid}>
    //         <div className={classes.col33}>
    //           <div className={classes.footerwidgetlogo}>
    //             <a href="logo">
    //               <img src="/Logo.svg" alt="Logo" />
    //             </a>
    //             <p>
    //               As a start-up company, our team is our highest priority and we
    //               welcome new talent in our team. Along with our young spirit,
    //               our aim is to create an ideal and open environment where each
    //               person is eager to work and encouraged by the creative ability
    //               of every member of our team. Come and see us!
    //             </p>
    //           </div>
    //         </div>
    //         <div className={classes.col16}>
    //           <div className={classes.footerwidget}>
    //             <h3>Explore</h3>
    //             <ul>
    //               <li>
    //                 <a href="/Home">Home</a>
    //               </li>
    //               <li>
    //                 <a href="/About">About</a>
    //               </li>
    //               <li>
    //                 <a href="/Blog">Blog</a>
    //               </li>
    //               <li>
    //                 <a href="/Contact">Contact</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className={classes.col16}>
    //           <div className={classes.footerwidget}>
    //             <h3>Resources</h3>
    //             <ul>
    //               <li>
    //                 <a href="/CaseStudies">Case Studies</a>
    //               </li>
    //               <li>
    //                 <a href="/OurServices">Out Services</a>
    //               </li>
    //               <li>
    //                 <a href="/Testimonials">Testimonials</a>
    //               </li>
    //               <li>
    //                 <a href="/OurTechnologies">Our Technologies</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className={classes.col33}>
    //           <div className={classes.footerwidget}>
    //             <h3>Address</h3>
    //             <ul>
    //               <li>
    //                 <a href="/#">
    //                   2A/64A Bach Dang Street, Ward 2, Tan Binh District Ho Chi
    //                   Minh City, Vietnam
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/#">+84 98 996 0578</a>
    //               </li>
    //               <li>
    //                 <a href="/#">info@innomizetech.com</a>
    //               </li>
    //             </ul>
    //             <ul className={classes.footersociallink}>
    //               <li>
    //                 <a href="https://facebook.com/">
    //                   <img src="/facebook.svg" alt="facebook" />
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="https://facebook.com/">
    //                   <img src="twitter.svg" alt="twitter" />
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="https://facebook.com/">
    //                   <img src="/linkedin.svg" alt="Linkedin" />
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>

    //       <div className={classes.footerbottom}>
    //         <p>
    //           Copyright @2021 <strong>Innomize Co.,Ltd.</strong> All Rights
    //           Reserved
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </Fragment>
    <Fragment>
      <div className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.rowfluid}>
            <div className={classes.col}>
              <div className={classes.footerwidget}>
                <h3>Address</h3>
                <ul>
                  <li>
                    <a href="/#">
                      2A/64A Bach Dang Street, Ward 2, Tan Binh District Ho Chi
                      Minh City, Vietnam
                    </a>
                  </li>
                  <li>
                    <a href="/#">+84 98 996 0578</a>
                  </li>
                  <li>
                    <a href="/#">info@innomizetech.com</a>
                  </li>
                </ul>
                <ul className={classes.footersociallink}>
                  <li>
                    <a href="https://facebook.com/">
                      <img src="./facebook.svg" alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com/">
                      <img src="./twitter.svg" alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com/">
                      <img src="./linkedin.svg" alt="Linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.col}>
              <div className={classes.footerwidget}>
                <h3>Explore</h3>
                <ul>
                  <li>
                    <a href="/Home">Home</a>
                  </li>
                  <li>
                    <a href="/About">About</a>
                  </li>
                  <li>
                    <a href="/Blog">Blog</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.col}>
              <div className={classes.footerwidget}>
                <h3>Clutch</h3>
                <h3>GoodFilm</h3>
              </div>
            </div>
          </div>
          <div className={classes.footerbottom}>
            <p>
              Copyright @2021 <strong>Innomize Co.,Ltd.</strong> All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
