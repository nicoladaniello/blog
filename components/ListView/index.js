import React from "react";
import classnames from "classnames";
import { PostListViewEnum } from "../PostList";

const ListView = ({ selected = PostListViewEnum.COLUMNS, select }) => {
  return (
    <div className="d-flex justify-content-end">
      <div className="btn-group mb-2" role="group">
        <button
          type="button"
          className={classnames("btn btn-sm btn-light", {
            active: selected === PostListViewEnum.COLUMNS
          })}
          onClick={() => select(PostListViewEnum.COLUMNS)}
        >
          &#9783;
        </button>
        <button
          type="button"
          className={classnames("btn btn-sm btn-light", {
            active: selected === PostListViewEnum.ROWS
          })}
          onClick={() => select(PostListViewEnum.ROWS)}
        >
          &#9776;
        </button>
      </div>
    </div>
  );
};

export default ListView;
