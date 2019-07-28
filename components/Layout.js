import { Fragment } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title, headerData, children }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <style>
        {`
      @font-face {
        font-family: 'Foo';
        src: url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
      }

      body {
        font-family: 'Montserrat', sans-serif;
      }
    `}
      </style>
    </Head>
    <Header data={headerData} />
    <main>{children}</main>
    <Footer />
  </Fragment>
);

export default Layout;
