import React, { Fragment, useContext } from "react";
import Head from "next/head";
import SettingsContext from "../../../providers/SettingsContext.js";
import LayoutSidebar from "../../LayoutSidebar/index.js";
import { stripHtml } from "../../../util.js";
import Header from "../../Header/index.js";
import Footer from "../../Footer/index.js";

const Layout = ({ title, description, page = {}, children }) => {
  const { generalSettingsDescription } = useContext(SettingsContext);

  return (
    <Fragment>
      <Head>
        {title ? (
          <title>{title}</title>
        ) : page.title ? (
          <title>{stripHtml(page.title)}</title>
        ) : null}
        {!!generalSettingsDescription && (
          <meta name="description" content={generalSettingsDescription} />
        )}
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
            <div className="col-md-8 col-xs-12">
              {!!page && !!page.content && (
                <section>
                  <div dangerouslySetInnerHTML={{ __html: page.content }} />
                </section>
              )}
              {children}
            </div>
            <div className="col">
              <LayoutSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
