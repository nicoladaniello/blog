import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { postFields } from "./withPosts";

export const getUser = gql`
  query getUsers($slug: String!) {
    users(where: { nicename: $slug }) {
      nodes {
        id
        userId
        name
        slug
        avatar {
          url
        }
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

const withUser = graphql(getUser, {
  options: ({ variables }) => ({ variables }),
  props: ({ data }) => ({
    userData: {
      ...data,
      user: data.users && data.users.nodes.length ? data.users.nodes[0] : null
    }
  })
});
export default withUser;
