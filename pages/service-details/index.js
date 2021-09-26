import Layout from "../../components/Layout/Layout";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import OurBlogArea from "../../components/OurBlogArea/OurBlogArea";
import ServiceDetailsBanner from "../../components/ServiceDetails/ServiceDetailsBanner/ServiceDetailsBanner";
import { Fragment } from "react";
function services() {
  return (
    <Fragment>
      <Layout>
        <ServiceDetailsBanner />
        <ServiceDetails />
        <OurBlogArea />
      </Layout>
    </Fragment>
  );
}

export default services;
