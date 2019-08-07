import React from "react";
import Tag from "../Tag";

const TagList = ({ tags }) => {
  return tags && tags.nodes.length
    ? tags.nodes.map(tag => <Tag key={tag.id} tag={tag} />)
    : null;
};

export default TagList;
