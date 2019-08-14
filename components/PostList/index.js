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

  const { nodes, pageInfo, onLoadMore } = posts;

  return (
    <div {...rest}>
      <div className="card-columns post-list">
        {nodes.map(post => (
          <div key={post.id} className="pt-3 px-1">
            <Post post={post} className="mb-3" />
          </div>
        ))}
      </div>

      <div className="text-center">
        {pageInfo && pageInfo.hasNextPage && (
          <button className="btn btn-light" onClick={onLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default PostList;
