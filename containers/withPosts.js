import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import renderWhenLoading from "./renderWhenLoading";
import renderWhenError from "./renderWhenError";

export const getPosts = gql`
  query postsQuery($first: Int, $before: String, $after: String) {
    posts(first: $first, before: $before, after: $after) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      nodes {
        id
        postId
        slug
        uri
        title
        excerpt
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
          nicename
        }
      }
    }
  }
`;

function loadMorePosts({ posts: { pageInfo }, fetchMore }, vars) {
  fetchMore({
    variables: {
      ...vars,
      after: pageInfo.endCursor
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;
      const { pageInfo: prevPageInfo, nodes: prevNodes } = prev.posts;
      const { pageInfo, nodes } = fetchMoreResult.posts;

      const result = {
        posts: {
          __typename: prev.posts.__typename,
          pageInfo: { ...prevPageInfo, ...pageInfo },
          nodes: [...prevNodes, ...nodes]
        }
      };

      return result;
    }
  });
}

const withPosts = variables =>
  graphql(getPosts, {
    options: { variables },
    props: ({ data = {} }) => {
      return {
        posts: {
          pageInfo: data.posts ? data.posts.pageInfo : null,
          posts: data.posts ? data.posts.nodes : null,
          onLoadMore: () => {
            loadMorePosts(data, variables);
          }
        }
      };
    }
  });
export default withPosts;
