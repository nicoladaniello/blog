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
  props: ({ data }) => ({ tagsData: data })
});
export default withTags;
