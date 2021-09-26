
import { Fragment } from "react";
import Layout from "../../components/Layout/Layout";
import Blog from "../../components/Blog/Blog";
// import Image from "next/image";
function blogs(props) {
  // console.log("I am on the client");
  // console.log("TrendPosts :", props.data);
  // console.log("ListPosts :", props.ListPosts);

  return (
    <Fragment>
      <Layout>
        <Blog TrendPosts={props.data} ListPosts={props.ListPosts} />
      </Layout>
    </Fragment>
  );
}
export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://localhost:1337/posts");
  const listpost = await fetch("http://localhost:1337/list-posts");
  const TrendPosts = await res.json();
  const ListPosts = await listpost.json();
  return {
    props: {
      data: TrendPosts,
      ListPosts: ListPosts,
    },
  };
}
export default blogs;
