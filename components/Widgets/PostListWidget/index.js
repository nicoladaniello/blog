import React from "react";
import Link from "next/link";
import classnames from "classnames";
import ListGroup from "../../common/ListGroup";
import Image from "../../Image";

const PostListWidget = ({ postsData: { posts }, title, className }) => {
  if (!posts || !posts.nodes.length) return null;

  return (
    <div className={className}>
      {title && <h5 className="font-weight-bold">{title}</h5>}
      <ListGroup flush items={posts.nodes}>
        {({ item, className }) => (
          <div className={classnames(className, "media d-flex")}>
            <Image
              style={{ width: "50px", height: "50px" }}
              className="mr-3 rounded-circle d-none d-lg-block"
              img={item.featuredImage}
            />
            <div className="media-body">
              <h5 className="mt-0 small">
                <Link prefetch href="/posts/[uri]" as={`/posts/${item.uri}`}>
                  <a className="stretched-link font-weight-bold list-group-item-action">
                    {item.title}
                  </a>
                </Link>
              </h5>
            </div>
          </div>
        )}
      </ListGroup>
    </div>
  );
};

export default PostListWidget;
