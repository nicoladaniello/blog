import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import renderWhenLoading from "./renderWhenLoading";
import renderWhenError from "./renderWhenError";

export const getPage = gql`
  query getPage($uri: String!) {
    pageBy(uri: $uri) {
      id
      pageId
      title
      content
      featuredImage {
        sourceUrl
      }
    }
  }
`;

const withPage = uri =>
  compose(
    graphql(getPage, {
      options: { variables: { uri } },
      props: ({ data: { pageBy } = {} }) => ({ page: pageBy })
    }),
    renderWhenLoading(),
    renderWhenError()
  );
export default withPage;
