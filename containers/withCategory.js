import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { postFields } from "./withPosts";

export const getCategory = gql`
  query getCategory($slug: [String]) {
    categories(where: { slug: $slug, shouldOutputInFlatList: true }) {
      nodes {
        id
        name
        slug
        description
        featuredImageUrl
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
        parent {
          id
          name
          slug
          description
          featuredImageUrl
        }
        children {
          nodes {
            id
            name
            slug
            description
            featuredImageUrl
          }
        }
      }
    }
  }
  ${postFields}
`;

const withCategory = graphql(getCategory, {
  options: ({ variables }) => ({ variables }),
  props: ({ data }) => {
    if (!data || !data.categories || !data.categories.nodes.length)
      return { category: null };

    let category = data.categories.nodes[0];
    category.children = category.children.nodes ? category.children.nodes : [];
    const pageInfo = category.posts ? category.posts.pageInfo : null;
    const posts = category.posts
      ? category.posts.nodes
        ? category.posts.nodes
        : category.posts.posts
      : null;

    category.posts = {
      pageInfo,
      posts: posts.map(post => ({
        ...post,
        tags: post.tags.nodes,
        category: post.categories.nodes.length ? post.categories.nodes[0] : null
      }))
    };

    return { category };
  }
});
export default withCategory;
