
import { Fragment } from "react";
import classes from "./Blog.module.css";
import BlogBanner from "../Blog/BlogBanner/BlogBanner";
import OurBlogArea from "../OurBlogArea/OurBlogArea";
import Link from "next/link";
export default function Blog(props) {
  const posts = props.TrendPosts;
  const ListPosts = props.ListPosts;
  console.log("ListPosts", ListPosts);
  // const url = posts[0].postimage.url;
  const orig = "http://localhost:1337";
  // console.log(posts[0].postimage.url)
  // console.log(ListPosts[1].image.url);
  // console.log(ListPosts[6].slug)
  console.log(ListPosts[6].user.username);
  var options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <Fragment>
      <div className={classes.blog}>
        <div className={classes.bloghead}>
          <BlogBanner className={classes.blogbanner} />
          <div className={classes.container}>
            <div className={classes.blogrow}>
              {posts &&
                posts.map((post) => (
                  <div key={post.id} className={classes.blogtrend}>
                    <a href="#" className={classes.blogtrendimg}>
                      <img src={orig + post.postimage.url} alt="Blog img" />
                    </a>
                    <div className={classes.blogtrendcontent}>
                      <h3>Trending</h3>

                      <a href="/blog-detail">
                        <p>{post.title}</p>
                      </a>

                      <ul>
                        <li className={classes.author}>
                          <a href="#" className={classes.authorinf}>
                            <img src="./Hoang.png" alt="Hoang" />
                            <span>Hoang Le</span>
                          </a>
                        </li>
                        <li className={classes.time}>
                          {new Date(post.createdAt).toLocaleString(
                            "en-US",
                            options
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              <div className={classes.blogcontact}>
                <input type="text" placeholder="Search..."></input>
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
                <div className={classes.blogcontactbanner}>
                  <h3>Get our new post</h3>
                  <button>
                    <a href="#">
                      <span>Subscribe</span>
                    </a>
                  </button>
                  <div className={classes.blogcontactbannerimg}>
                    <img src="./Group 133.svg" alt="Group 133" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.blogmain}>
          <div className={classes.container}>
            <div className={classes.menu}>
              <ul className={classes.menulist}>
                <li className={classes.menuitem}>
                  <span>All Category</span>
                </li>
                <li className={classes.menuitem}>
                  <a href="#">Angular</a>
                </li>
                <li className={classes.menuitem}>
                  <a href="#">AWS</a>
                </li>
                <li className={classes.menuitem}>
                  <a href="#">DevOps</a>
                </li>
                <li className={classes.menuitem}>
                  <a href="#">Ansible</a>
                </li>
                <li className={classes.menuitem}>
                  <a href="#">AWS CDK</a>
                </li>
                <li className={classes.menuitem}>
                  <a href="#">CloudFormation</a>
                </li>
                <li className={classes.menuitem}>
                  <a href="#">General</a>
                </li>
                <li className={classes.menuitem}>
                  <a href="#">How to</a>
                </li>
                <li className={classes.menuitem}>
                  <a href="#">Node.js</a>
                </li>
                <li className={classes.menuitem}>
                  <a>
                    <img src="./arrowLeft.png" alt="" />
                  </a>
                  <a>
                    <img src="./arrowRight.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>

            <div className={classes.techintro}>
              <div className={classes.row}>
                {ListPosts &&
                  ListPosts.map((post) => (
                    <div key={post.id} className={classes.card}>
                      <Link href={`/${post.slug}`}>
                        <a className={classes.cardimg}>
                          <img src={orig + post.image.url} alt="Blogimg1" />
                        </a>
                      </Link>
                      <div className={classes.cardcontent}>
                        <ul className={classes.cardcontentauthor}>
                          <li className={classes.cardauthor}>
                            <a href="#" className={classes.cardauthorinf}>
                              <img src="./Hoang.png" alt="Hoang" />
                              <span>{post.user.username}</span>
                            </a>
                          </li>
                          <li className={classes.cardtime}>
                            {new Date(post.createdAt).toLocaleString(
                              "en-US",
                              options
                            )}
                          </li>
                        </ul>
                        <Link href={`/${post.slug}`}>
                          <a>
                            <p>{post.title}</p>
                          </a>
                        </Link>
                        <ul className={classes.techrefer}>
                          <li>
                            <a href="#">{post.subtitle1}</a>
                          </li>
                          <li>
                            <a href="#">{post.subtitle2}</a>
                          </li>
                          <li>
                            <a href="#">{post.subtitle3}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}

                {/* <div className={classes.card}>
                      <a href="#" className={classes.cardimg}>
                        <img
                          src="/blogimg2/NoPath - Copy (5).png"
                          alt="Blogimg2"
                        />
                      </a>
                      <div className={classes.cardcontent}>
                        <ul className={classes.cardcontentauthor}>
                          <li className={classes.cardauthor}>
                            <a href="#" className={classes.cardauthorinf}>
                              <img src="/Hoang.png" alt="Hoang" />
                              <span>Hoang Le</span>
                            </a>
                          </li>
                          <li className={classes.cardtime}>April 30, 2020</li>
                        </ul>
                        <a href="#">
                          <p>Top reasons why AWS CDK over CloudFormation</p>
                        </a>

                        <ul className={classes.techrefer}>
                          <li>AWS</li>
                          <li>CloudFormation</li>
                          <li>DevOps</li>
                        </ul>
                      </div>
                    </div>
                    <div className={classes.card}>
                      <a href="#" className={classes.cardimg}>
                        <img
                          src="/blogimg3/NoPath - Copy (5).png"
                          alt="Blogimg3"
                        />
                      </a>
                      <div className={classes.cardcontent}>
                        <ul className={classes.cardcontentauthor}>
                          <li className={classes.cardauthor}>
                            <a href="#" className={classes.cardauthorinf}>
                              <img src="/Hoang.png" alt="Hoang" />
                              <span>Hoang Le</span>
                            </a>
                          </li>
                          <li className={classes.cardtime}>April 30, 2020</li>
                        </ul>
                        <a href="#">
                          <p>
                            Continuous Delivery — Deploying a Node.js app to AWS
                            EC2 using An...
                          </p>
                        </a>

                        <ul className={classes.techrefer}>
                          <li>AWS</li>
                          <li>Ansible</li>
                          <li>DevOps</li>
                        </ul>
                      </div>
                    </div> */}
              </div>

              {/* <div className={classes.row}>
                <div className={classes.card}>
                  <a href="#" className={classes.cardimg}>
                    <img src="/blogimg4/NoPath - Copy (3).png" alt="Blogimg4" />
                  </a>

                  <div className={classes.cardcontent}>
                    <ul className={classes.cardcontentauthor}>
                      <li className={classes.cardauthor}>
                        <a href="#" className={classes.cardauthorinf}>
                          <img src="/Hoang.png" alt="Hoang" />
                          <span>Hoang Le</span>
                        </a>
                      </li>
                      <li className={classes.cardtime}>April 30, 2020</li>
                    </ul>
                    <a href="#">
                      <p>
                        Building serverless web crawler with Puppeteer on AWS
                        Fargate
                      </p>
                    </a>

                    <ul className={classes.techrefer}>
                      <li>AWS</li>
                      <li>Serverless</li>
                      <li>Web Crawler</li>
                    </ul>
                  </div>
                </div>
                <div className={classes.card}>
                  <a href="#" className={classes.cardimg}>
                    <img src="/blogimg5/NoPath - Copy (4).png" alt="Blogimg5" />
                  </a>

                  <div className={classes.cardcontent}>
                    <ul className={classes.cardcontentauthor}>
                      <li className={classes.cardauthor}>
                        <a href="#" className={classes.cardauthorinf}>
                          <img src="/Hoang.png" alt="Hoang" />
                          <span>Hoang Le</span>
                        </a>
                      </li>
                      <li className={classes.cardtime}>April 30, 2020</li>
                    </ul>
                    <a href="#">
                      <p>Top reasons why AWS CDK over CloudFormation</p>
                    </a>

                    <ul className={classes.techrefer}>
                      <li>AWS</li>
                      <li>CloudFormation</li>
                      <li>DevOps</li>
                    </ul>
                  </div>
                </div>
                <div className={classes.card}>
                  <a href="#" className={classes.cardimg}>
                    <img src="/blogimg6/NoPath - Copy (2).png" alt="Blogimg6" />
                  </a>

                  <div className={classes.cardcontent}>
                    <ul className={classes.cardcontentauthor}>
                      <li className={classes.cardauthor}>
                        <a href="#" className={classes.cardauthorinf}>
                          <img src="/Hoang.png" alt="Hoang" />
                          <span>Hoang Le</span>
                        </a>
                      </li>
                      <li className={classes.cardtime}>April 30, 2020</li>
                    </ul>
                    <a href="#">
                      <p>
                        Continuous Delivery — Deploying a Node.js app to AWS EC2
                        using An...
                      </p>
                    </a>

                    <ul className={classes.techrefer}>
                      <li>AWS</li>
                      <li>Ansible</li>
                      <li>DevOps</li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <OurBlogArea />
    </Fragment>
  );
}
