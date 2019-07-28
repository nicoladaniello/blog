import { graphql } from "react-apollo";
import gql from "graphql-tag";

const postsQuery = gql`
  query postsQuery($first: Int, $before: String, $after: String) {
    posts(first: $first, before: $before, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          postId
          slug
          uri
          title
          excerpt
          featuredImage {
            sourceUrl
            srcSet
            sizes
            altText
          }
          author {
            name
            nicename
          }
        }
      }
    }
  }
`;

const withPosts = variables => graphql(postsQuery, { options: { variables } });
export default withPosts;
