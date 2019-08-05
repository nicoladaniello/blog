import React from "react";
import Tag from "../../Tag";

const TagListWidget = ({ tags, title }) => {
  if (!tags || !tags.tags)
    return <div className="alert alert-info">No tags to show</div>;

  return (
    <div>
      {title && <h5 className="font-weight-bold">{title}</h5>}
      {tags.tags.map(tag => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  );
};

export default TagListWidget;
