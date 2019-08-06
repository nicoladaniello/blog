import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { postFields } from "./withPosts";

export const getTag = gql`
  query getTags($slug: [String]) {
    tags(where: { slug: $slug }) {
      nodes {
        id
        name
        slug
        posts {
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
          }
          nodes {
            ...postFields
          }
        }
      }
    }
  }
  ${postFields}
`;

const withTag = graphql(getTag, {
  options: ({ variables }) => ({ variables }),
  props: ({ data }) => ({
    tagData: {
      ...data,
      tag: data.tags && data.tags.nodes.length ? data.tags.nodes[0] : null
    }
  })
});
export default withTag;
