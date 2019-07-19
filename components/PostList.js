import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";

export const allPostsQuery = gql`
  query allPosts($first: Int, $before: String, $after: String) {
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
        }
      }
    }
  }
`;

export const allPostsQueryVars = {
  first: 10,
  after: null
};

export default function PostList() {
  return (
    <Query query={allPostsQuery} variables={allPostsQueryVars}>
      {({ loading, error, data: { posts }, fetchMore }) => {
        if (error) return <ErrorMessage message="Error loading posts." />;
        if (loading) return <div>Loading</div>;

        const { hasNextPage, endCursor } = posts.pageInfo;
        return (
          <section>
            <ul>
              {posts.edges.map(({ node: post }, index) => (
                <li key={post.id}>
                  <div>
                    <span>{index + 1}. </span>
                    <a href={`/posts/${post.uri}`}>{post.title}</a>
                  </div>
                </li>
              ))}
            </ul>
            {hasNextPage ? (
              <button onClick={() => loadMorePosts(endCursor, fetchMore)}>
                {" "}
                {loading ? "Loading..." : "Next page"}{" "}
              </button>
            ) : (
              ""
            )}
            <style jsx>{`
              section {
                padding-bottom: 20px;
              }
              li {
                display: block;
                margin-bottom: 10px;
              }
              div {
                align-items: center;
                display: flex;
              }
              a {
                font-size: 14px;
                margin-right: 10px;
                text-decoration: none;
                padding-bottom: 0;
                border: 0;
              }
              span {
                font-size: 14px;
                margin-right: 5px;
              }
              ul {
                margin: 0;
                padding: 0;
              }
              button:before {
                align-self: center;
                border-style: solid;
                border-width: 6px 4px 0 4px;
                border-color: #ffffff transparent transparent transparent;
                content: "";
                height: 0;
                margin-right: 5px;
                width: 0;
              }
            `}</style>
          </section>
        );
      }}
    </Query>
  );
}

function loadMorePosts(endCursor, fetchMore) {
  fetchMore({
    variables: {
      ...allPostsQueryVars,
      after: endCursor
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult;

      return {
        posts: {
          ...fetchMoreResult.posts,
          edges: [...previousResult.posts.edges, ...fetchMoreResult.posts.edges]
        }
      };
    }
  });
}
