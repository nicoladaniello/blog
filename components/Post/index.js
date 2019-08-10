import React from "react";
import Link from "next/link";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import CardTitle from "../common/Card/CardTitle";
import CategoryBadge from "../CategoryBadge";
import CardMeta from "../common/Card/CardMeta";
import TagList from "../TagList";
import ImageContainer from "../ImageContainer";
import Image from "../Image";

const Post = ({ post, className, ...rest }) => {
  const { title, uri, featuredImage, tags, categories } = post;
  const category =
    categories && categories.nodes.length
      ? categories.nodes[categories.nodes.length - 1]
      : null;
  const img = {
    ...featuredImage,
    sizes: "(max-width: 633px) 100vw, (max-width: 844px) 50vw, 33vw"
  };

  return (
    <Card className={className} {...rest}>
      {featuredImage && (
        <ImageContainer>
          <Image top img={img} />
        </ImageContainer>
      )}
      <CardBody>
        <CategoryBadge data={category} />
        <Link prefetch passHref href="/posts/[uri]" as={`/posts/${uri}`}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <CardMeta data={post} />
      </CardBody>
      <div className="card-footer">
        <TagList tags={tags} />
      </div>
    </Card>
  );
};

export default Post;
