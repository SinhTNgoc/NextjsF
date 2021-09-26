import Section from "../components/Section/Section";
import Main from "../components/Main/Main";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Layout>
        <Section />
        <Main />
      </Layout>
    </Fragment>
  );
}

export default HomePage;
