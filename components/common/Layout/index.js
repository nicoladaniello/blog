import React, { Fragment } from "react";
import Head from "next/head";
import Footer from "../../Footer/index.js";
import Header from "../../Header/index.js";

const Layout = ({ page = {}, children }) => (
  <Fragment>
    <Head>
      {page.title && <title>{page.title}</title>}
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
    <Header page={page} />
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
            {children}
          </div>
          <aside className="col">sidebar</aside>
        </div>
      </div>
    </main>
    <Footer />
  </Fragment>
);

export default Layout;
