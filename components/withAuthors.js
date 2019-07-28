import { graphql } from "react-apollo";
import gql from "graphql-tag";

const authorsQuery = gql`
  query postsQuery($first: Int, $before: String, $after: String) {
    users(
      first: $first
      before: $before
      after: $after
      where: { role: AUTHOR }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          name
          description
          avatar {
            url
          }
        }
      }
    }
  }
`;

const withAuthors = variables =>
  graphql(authorsQuery, { options: { variables } });
export default withAuthors;
