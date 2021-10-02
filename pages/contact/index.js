import { Fragment } from "react";
import Layout from "../../components/Layout/Layout";
import Contact from "../../components/Contact/Contact";
function index() {
  return (
    <Fragment>
      <Layout>
        <Contact />
      </Layout>
    </Fragment>
  );
}

export default index;
