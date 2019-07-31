import React, { useState } from "react";
import Post from "../Post";
import classnames from "classnames";

export const PostListViewEnum = Object.freeze({
  COLUMNS: 0,
  ROWS: 1
});

const PostList = ({
  data: { posts, pageInfo, onLoadMore } = {},
  view: defaultView = PostListViewEnum.COLUMNS,
  ...rest
}) => {
  let [view, setView] = useState(defaultView);

  if (!posts || !posts.length)
    return (
      <div {...rest}>
        <div className="alert alert-info">Nothing to show yet!</div>
      </div>
    );

  return (
    <div {...rest}>
      <div className="d-flex justify-content-end">
        <div className="btn-group mb-2" role="group">
          <button
            type="button"
            className={classnames("btn btn-sm btn-light", {
              active: view === PostListViewEnum.COLUMNS
            })}
            onClick={() => setView((view = PostListViewEnum.COLUMNS))}
          >
            &#9783;
          </button>
          <button
            type="button"
            className={classnames("btn btn-sm btn-light", {
              active: view === PostListViewEnum.ROWS
            })}
            onClick={() => setView((view = PostListViewEnum.ROWS))}
          >
            &#9776;
          </button>
        </div>
      </div>
      <div
        className={classnames({
          "card-columns two-columns": view === PostListViewEnum.COLUMNS
        })}
      >
        {posts.map(post => (
          <Post
            key={post.id}
            horizontal={view === PostListViewEnum.ROWS}
            data={post}
          />
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
