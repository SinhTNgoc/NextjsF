import React from "react";
import { Fragment } from "react";
import Layout from "../../components/Layout/Layout";
import BlogDetail from "../../components/Blog/BlogDetail/BlogDetail";
function index() {
  return (
    <Fragment>
      <Layout>
        <BlogDetail />
      </Layout>
    </Fragment>
  );
}

export default index;
