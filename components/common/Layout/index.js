import React, { Fragment } from "react";
import Head from "next/head";
import Footer from "../../Footer/index.js";
import Header from "../../Header/index.js";
import LayoutSidebar from "../../LayoutSidebar/index.js";

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
    <main className="py-4">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-7 col-md-8 col-sm-8 col-xs-12">
            {!!page.content && (
              <section>
                <div dangerouslySetInnerHTML={{ __html: page.content }} />
              </section>
            )}
            {children}
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <LayoutSidebar />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </Fragment>
);

export default Layout;
