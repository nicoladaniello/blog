import { graphql } from "react-apollo";
import gql from "graphql-tag";

export const getUsers = gql`
  query getUsers(
    $first: Int
    $before: String
    $after: String
    $role: UserRoleEnum
  ) {
    users(
      first: $first
      before: $before
      after: $after
      where: { role: $role }
    ) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      nodes {
        id
        userId
        name
        slug
        description
        avatar {
          size
          url
        }
      }
    }
  }
`;

const withUsers = variables =>
  graphql(getUsers, {
    options: { variables },
    props: ({ data = {} }) => {
      return {
        pageInfo: data.users ? data.users.pageInfo : null,
        users: data.users ? data.users.nodes : null
      };
    }
  });
export default withUsers;
