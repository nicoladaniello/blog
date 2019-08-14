import React from "react";
import Tag from "../../Tag";

const TagListWidget = ({ tagsData: { tags }, title, className }) => {
  if (!tags || !tags.nodes.length) return null;

  return (
    <div className={className}>
      {title && <h5 className="font-weight-bold">{title}</h5>}
      {tags.nodes.map(tag => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  );
};

export default TagListWidget;
