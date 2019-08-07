import React from "react";
import Post from "../Post";

const PostList = ({ posts, ...rest }) => {
  if (!posts || !posts.nodes.length)
    return (
      <div {...rest}>
        <div className="alert alert-info small">
          There are no posts at the moment
        </div>
      </div>
    );

  return (
    <div {...rest}>
      <div className="card-columns two-columns">
        {posts.nodes.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <div className="text-center">
        {posts.pageInfo && posts.pageInfo.hasNextPage && (
          <button className="btn btn-light" onClick={posts.onLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default PostList;
