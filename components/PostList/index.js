import React from "react";
import Post from "../Post";
import classnames from "classnames";

export const PostListViewEnum = Object.freeze({
  COLUMNS: 0,
  ROWS: 1
});

const PostList = ({ posts, view = PostListViewEnum.COLUMNS, ...rest }) => {
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
      <div
        className={classnames({
          "card-columns two-columns": view === PostListViewEnum.COLUMNS
        })}
      >
        {posts.nodes.map(post => (
          <Post
            key={post.id}
            post={post}
            horizontal={view === PostListViewEnum.ROWS}
          />
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
