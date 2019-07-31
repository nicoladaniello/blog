import App, { Container } from "next/app";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "react-apollo";
import SettingsProvider from "../providers/SettingsProvider";

import "../styles.scss";
import NavbarProvider from "../providers/NavbarProvider";
import FooterProvider from "../providers/FooterProvider";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <SettingsProvider>
            <NavbarProvider>
              <FooterProvider>
                <Component {...pageProps} />
              </FooterProvider>
            </NavbarProvider>
          </SettingsProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
