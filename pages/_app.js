import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "react-apollo";
import nprogress from "nprogress";

import SettingsProvider from "../providers/SettingsProvider";
import "../styles.scss";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading ${url}`);
  nprogress.start();
});

Router.events.on("routeChangeComplete", url => {
  console.log("Loading complete successfully");
  nprogress.done();
});
Router.events.on("routeChangeError", url => {
  console.log("Loading complete with error");
  nprogress.done();
});

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <SettingsProvider>
            <Component {...pageProps} />
          </SettingsProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
