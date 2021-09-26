import Layout from "../components/Layout/Layout";
import Services from "../components/Services/Services";
import OurBlogArea from "../components/OurBlogArea/OurBlogArea";
import ServiceBanner from "../components/Services/ServiceBanner/ServiceBanner";
import { Fragment } from "react";
function services() {
  return (
    <Fragment>
      <Layout>
        <ServiceBanner />
        {/* <div style={{marginTop:"0px"}}> */}
          <Services />
        {/* </div> */}
        <OurBlogArea />
      </Layout>
    </Fragment>
  );
}

export default services;
