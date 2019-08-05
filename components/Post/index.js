import React, { Fragment } from "react";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import CardTitle from "../common/Card/CardTitle";
import CardImage from "../common/Card/CardImage";
import CardText from "../common/Card/CardText";
import CardHorizontal from "../common/Card/CardHorizontal";
import CategoryBadge from "../CategoryBadge";
import Link from "next/link";
import { stripHtml } from "../../util";
import Tag from "../Tag";

const Post = ({
  data: { title, uri, featuredImage, excerpt, author, date, tags, category },
  horizontal,
  className,
  ...rest
}) => {
  const image = featuredImage ? (
    <div className="position-relative">
      <CardImage thumbnail img={featuredImage} />
      {category && (
        <CategoryBadge
          className="position-absolute"
          style={{ top: 24, left: 0 }}
          data={category}
        />
      )}
    </div>
  ) : (
    ""
  );
  const body = (
    <CardBody>
      {title && (
        <CardTitle>
          <Link href="/posts/[uri]" as={`/posts/${uri}`}>
            <a>{title}</a>
          </Link>
        </CardTitle>
      )}
      <div className="row mb-1">
        {author && (
          <div className="col">
            <CardText>
              <small>
                by{" "}
                <Link href="/users/[slug]" as={`/users/${author.slug}`}>
                  <a className="font-weight-bold">{author.name}</a>
                </Link>
              </small>
            </CardText>
          </div>
        )}
        {date && (
          <div className="col">
            <CardText className="text-right">
              <small>{new Date(date).toLocaleDateString()}</small>
            </CardText>
          </div>
        )}
      </div>
      {excerpt && <CardText>{stripHtml(excerpt)}</CardText>}
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
      {!!tags && (
        <div className="card-footer">
          {tags.map(tag => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      )}
    </Card>
  );
};

export default Post;
