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
        featuredImageUrl
      }
    }
  }
`;

const withCategories = graphql(getCategories, {
  options: ({ variables }) => ({ variables }),
  props: ({ data }) => {
    if (!data || !data.categories || !data.categories.nodes.length)
      return { categories: null };

    const categories = data.categories.nodes;
    const pageInfo = data.categories.pageInfo;

    return {
      categories: {
        pageInfo,
        categories
      }
    };
  }
});
export default withCategories;
