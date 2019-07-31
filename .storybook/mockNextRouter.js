/**
 * workaround as for https://github.com/zeit/next.js/issues/1827#issuecomment-470155709
 */

/* tslint:disable */

import React, { Component } from "react";
import Router from "next/router";
// import { action } from "@storybook/addon-actions";
import PropTypes from "prop-types";

const actionWithPromise = () => {
  // action("clicked link")();
  return new Promise((_, reject) => reject());
};

const mockedRouter = {
  push: actionWithPromise,
  replace: actionWithPromise,
  prefetch: () => {},
  route: "/mock-route",
  pathname: "mock-path"
};

// @ts-ignore
Router.router = mockedRouter;

const withMockRouterContext = mockRouter => {
  class MockRouterContext extends Component {
    getChildContext() {
      return {
        router: { ...mockedRouter, ...mockRouter }
      };
    }
    render() {
      return this.props.children;
    }
  }

  // @ts-ignore
  MockRouterContext.childContextTypes = {
    router: PropTypes.object
  };

  return MockRouterContext;
};

export const StorybookRouterFix = withMockRouterContext(mockedRouter);
