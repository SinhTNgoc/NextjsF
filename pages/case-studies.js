import Layout from "../components/Layout/Layout";
import OurBlogArea from "../components/OurBlogArea/OurBlogArea";
import CaseStudies from "../components/CaseStudies/CaseStudies"
import CaseStudiesBanner from "../components/CaseStudies/CaseStudiesBanner/CaseStudiesBanner";
import { Fragment } from "react";
function casestudies() {
  return (
    <Fragment>
      <Layout>
        <CaseStudiesBanner />
        <CaseStudies />
        <OurBlogArea />
      </Layout>
    </Fragment>
  );
}

export default casestudies;
