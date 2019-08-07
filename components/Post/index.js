import React from "react";
import Link from "next/link";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import CardTitle from "../common/Card/CardTitle";
import CardImage from "../common/Card/CardImage";
import CategoryBadge from "../CategoryBadge";
import CardMeta from "../common/Card/CardMeta";
import TagList from "../TagList";

const Post = ({ post, className, ...rest }) => {
  const { title, uri, featuredImage, excerpt, tags, categories } = post;
  const category =
    categories && categories.nodes.length ? categories.nodes[0] : null;
  return (
    <Card className={className} {...rest}>
      <div className="card-picture">
        <CardImage thumbnail img={featuredImage} />
      </div>
      <CardBody>
        <CategoryBadge data={category} />
        <CardTitle>
          <Link prefetch href="/posts/[uri]" as={`/posts/${uri}`}>
            <a>{title}</a>
          </Link>
        </CardTitle>
        <CardMeta data={post} />
      </CardBody>
      <div className="card-footer">
        <TagList tags={tags} />
      </div>
    </Card>
  );
};

export default Post;
