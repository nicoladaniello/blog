import React, { Fragment, useContext } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import SettingsContext from "../../../providers/SettingsContext.js";
import { stripHtml } from "../../../util.js";
import Header from "../../Header/index.js";

const Layout = ({ title, page = {}, loaders = [], children }) => {
  const { generalSettingsDescription } = useContext(SettingsContext);
  const LayoutSidebar = dynamic(import("../../LayoutSidebar/index.js"));
  const Footer = dynamic(import("../../Footer/index.js"));

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
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @font-face {
            font-family: 'Montserrat';
            src: url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
          }

          body {
            font-family: 'Montserrat', sans-serif;
          }
        `
          }}
        />
      </Head>
      <Header page={page} />
      <main className="py-4">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-8 px-md-4 col-xs-12">
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
