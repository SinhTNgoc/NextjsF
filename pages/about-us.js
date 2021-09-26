import Layout from "../components/Layout/Layout";
import About from "../components/About/About";
import { Fragment } from "react";
function about() {
  return (
    <Fragment>
      <Layout>
        <About />
      </Layout>
    </Fragment>
  );
}
export default about;
