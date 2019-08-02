import React from "react";
import App, { Container } from "next/app";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "react-apollo";

import "../styles.scss";
import SettingsProvider from "../providers/SettingsProvider";

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
