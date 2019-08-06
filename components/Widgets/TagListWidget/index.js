import React from "react";
import Tag from "../../Tag";

const TagListWidget = ({ tagsData, title }) => {
  if (!tagsData || !tagsData.tags)
    return <div className="alert alert-info">No tags to show</div>;

  return (
    <div>
      {title && <h5 className="font-weight-bold">{title}</h5>}
      {tagsData.tags.nodes.map(tag => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  );
};

export default TagListWidget;
