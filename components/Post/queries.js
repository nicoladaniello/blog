import gql from "graphql-tag";
import postFragments from "./fragments";

const getPost = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      id
      postId
      title
      date
      uri
      content
      ...PostFeaturedImage
      ...PostAuthor
      ...PostTags
      ...PostCategories
    }
  }
  ${postFragments.featuredImage}
  ${postFragments.author}
  ${postFragments.tags}
  ${postFragments.categories}
`;

const getPosts = gql`
  query getPosts($first: Int, $before: String, $after: String, $where: Object) {
    posts(first: $first, before: $before, after: $after, where: $where) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          postId
          title
          date
          uri
          excerpt
          ...PostFeaturedImage
          ...PostAuthor
          ...PostTags
          ...PostCategories
        }
      }
    }
  }
`;

export default {
  getPost,
  getPosts
};
