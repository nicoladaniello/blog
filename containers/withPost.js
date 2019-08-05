import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import renderWhenLoading from "./renderWhenLoading";
import renderWhenError from "./renderWhenError";

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

const withPost = compose(
  graphql(getPost, {
    options: ({ router }) => ({ variables: { uri: router.query.uri } }),
    props: ({ data: { postBy } = {} }) => ({ post: postBy })
  }),
  renderWhenLoading(),
  renderWhenError()
);
export default withPost;
