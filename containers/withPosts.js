import { graphql } from "react-apollo";
import gql from "graphql-tag";

export const postFields = gql`
  fragment postFields on Post {
    id
    postId
    uri
    title
    excerpt
    date
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
    }
    tags {
      nodes {
        id
        name
        slug
      }
    }
    categories {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

export const getPosts = gql`
  query postsQuery(
    $first: Int
    $before: String
    $after: String
    $tagSlugIn: [String]
  ) {
    posts(
      first: $first
      before: $before
      after: $after
      where: { tagSlugIn: $tagSlugIn }
    ) {
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
  ${postFields}
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

const withPosts = graphql(getPosts, {
  options: ({ variables }) => ({ variables }),
  props: ({ data, variables }) => {
    if (data.posts)
      data.posts.onLoadMore = () => {
        loadMorePosts(data, variables);
      };
    return {
      postsData: data
    };
  }
});
export default withPosts;
