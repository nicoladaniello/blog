import ErrorMessage from "./ErrorMessage";
import PostCard from "./PostCard";
import withPosts from "./withPosts";

const postsQueryVars = {
  first: 10,
  after: null
};

const PostList = ({ data: { error, loading, posts, fetchMore } }) => {
  if (error) return <ErrorMessage message="Error loading posts." />;
  if (loading) return <div>Loading</div>;
  if (!posts || !posts.edges.length)
    return <div className="alert alert-info">Nothing to show yet!</div>;

  const { hasNextPage, endCursor } = posts.pageInfo;
  const featuredPost = posts.edges[0];
  const otherPosts = posts.edges.slice(1);

  return (
    <section>
      <div className="row">
        {otherPosts.map(({ node: post }) => (
          <div key={post.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <PostCard post={post} />
          </div>
        ))}
      </div>
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
};

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

export default withPosts(postsQueryVars)(PostList);
