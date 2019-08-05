import React from "react";
import Post from "../Post";
import classnames from "classnames";

export const PostListViewEnum = Object.freeze({
  COLUMNS: 0,
  ROWS: 1
});

const PostList = ({ posts, view = PostListViewEnum.COLUMNS, ...rest }) => {
  if (!posts || !posts.posts.length)
    return (
      <div {...rest}>
        <div className="alert alert-info">Nothing to show yet!</div>
      </div>
    );

  return (
    <div {...rest}>
      <div
        className={classnames({
          "card-columns two-columns": view === PostListViewEnum.COLUMNS
        })}
      >
        {posts.posts.map(post => (
          <Post
            key={post.id}
            horizontal={view === PostListViewEnum.ROWS}
            data={post}
          />
        ))}
      </div>

      <div className="text-center">
        {posts.posts.pageInfo && posts.posts.pageInfo.hasNextPage && (
          <button className="btn btn-light" onClick={posts.onLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default PostList;
