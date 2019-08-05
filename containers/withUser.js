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
  options: ({ router }) => ({ variables: { slug: router.query.slug } }),
  props: ({ data = {} }) => {
    if (!data.users || !data.users.nodes.length) return { user: null };
    const user = data.users.nodes[0];
    const pageInfo = user.posts ? user.posts.pageInfo : null;
    const posts = user.posts ? user.posts.nodes : null;

    return {
      user: {
        ...user,
        posts: {
          pageInfo,
          posts: posts.map(post => ({
            ...post,
            tags: post.tags.nodes.length ? post.tags.nodes : null,
            category:
              post.categories.nodes.length > 0 ? post.categories.nodes[0] : null
          }))
        }
      }
    };
  }
});
export default withUser;
