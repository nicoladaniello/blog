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
  props: ({ data = {} }) => {
    if (!data.tags || !data.tags.nodes.length) return { tags: null };

    let tag = data.tags.nodes[0];
    const pageInfo = tag.posts ? tag.posts.pageInfo : null;
    const posts = tag.posts
      ? tag.posts.nodes
        ? tag.posts.nodes
        : tag.posts.posts
      : null;

    tag.posts = {
      pageInfo,
      posts: posts.map(post => ({ ...post, tags: post.tags.nodes }))
    };

    return { tag };
  }
});
export default withTag;
