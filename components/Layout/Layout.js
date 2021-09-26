import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Fragment } from "react";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
   
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
          {/* <link href="./public/PoppinsFont"/> */}
          <title>Document</title>
        </Head>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;