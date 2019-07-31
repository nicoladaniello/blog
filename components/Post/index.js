import React, { Fragment } from "react";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import CardTitle from "../common/Card/CardTitle";
import CardImage from "../common/Card/CardImage";
import CardText from "../common/Card/CardText";
import CardHorizontal from "../common/Card/CardHorizontal";
import Category from "../Category";

const Post = ({
  data: { title, category, featuredImage, excerpt },
  horizontal,
  className,
  ...rest
}) => {
  const image = featuredImage ? (
    <CardImage thumbnail img={featuredImage} />
  ) : (
    ""
  );
  const body = (
    <CardBody>
      {category && <Category data={category} />}
      {title && <CardTitle>{title}</CardTitle>}
      {excerpt && <CardText>{excerpt}</CardText>}
    </CardBody>
  );
  const content = horizontal ? (
    <CardHorizontal renderLeft={image} renderRight={body} />
  ) : (
    <Fragment>
      {image}
      {body}
    </Fragment>
  );
  return (
    <Card className={className} {...rest}>
      {content}
    </Card>
  );
};

export default Post;
