import { graphql } from "react-apollo";
import gql from "graphql-tag";

const getPost = gql`
  query getPost($uri: String!) {
    postBy(uri: $uri) {
      id
      postId
      title
      content
      date
      uri
      categories {
        nodes {
          id
          categoryId
          name
          slug
        }
      }
      tags {
        nodes {
          id
          tagId
          name
          slug
        }
      }
      featuredImage {
        id
        sourceUrl
        srcSet
        sizes
        altText
      }
      author {
        id
        name
        slug
        avatar {
          size
          url
        }
      }
    }
  }
`;

const withPost = graphql(getPost, {
  options: ({ variables }) => ({ variables }),
  props: ({ data }) => ({ postData: data })
});
export default withPost;
