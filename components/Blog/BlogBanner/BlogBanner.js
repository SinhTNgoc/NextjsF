
import { Fragment } from "react";
import classes from "./BlogBanner.module.css";
const BlogBanner = (props) => {
  // console.log(props);
  // const buildTimestamp = props.buildTimestamp;
  // console.log(buildTimestamp);
  return (
    <Fragment>
      <div className={classes.banner}>
        <div className={classes.bannertitle}>
          <h2>Blog</h2>
        </div>
      </div>
    </Fragment>
  );
};

// export const getStaticProps = () => {
//   return {
//     props: {
//       buildTimestamp: "1234",
//     },
//   };
// };
export default BlogBanner;
