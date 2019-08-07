import { graphql } from "react-apollo";
import gql from "graphql-tag";

export const getPage = gql`
  query getPage($uri: String!) {
    pageBy(uri: $uri) {
      id
      pageId
      title
      content
      featuredImage {
        id
        sourceUrl
        srcSet
        sizes
        altText
      }
    }
  }
`;

const withPage = graphql(getPage, {
  options: ({ variables }) => ({ variables }),
  props: ({ data }) => ({ pageData: data })
});
export default withPage;
