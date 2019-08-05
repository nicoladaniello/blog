import { graphql } from "react-apollo";
import gql from "graphql-tag";

export const getTags = gql`
  query getTags {
    tags {
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
      }
    }
  }
`;

const withTags = graphql(getTags, {
  options: ({ variables }) => ({ variables }),
  props: ({ data = {} }) => {
    if (!data.tags || !data.tags.nodes.length) return { tags: null };

    const tags = data.tags.nodes;
    const pageInfo = data.tags.pageInfo;

    return {
      tags: {
        pageInfo,
        tags
      }
    };
  }
});
export default withTags;
