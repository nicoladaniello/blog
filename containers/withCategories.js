import { graphql } from "react-apollo";
import gql from "graphql-tag";

export const getCategories = gql`
  query getCategories {
    categories {
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      nodes {
        id
        name
        slug
        description
        customFields {
          featuredImage {
            id
            sourceUrl
            srcSet
            sizes
            altText
          }
        }
      }
    }
  }
`;

const withCategories = graphql(getCategories, {
  options: ({ variables }) => ({ variables }),
  props: ({ data }) => ({ categoriesData: data })
});
export default withCategories;
