import React from "react";
import Link from "next/link";
import CardText from "../CardText";

const CardMeta = ({ data: { author, date } = {} }) => {
  return (
    <div className="row mb-1">
      {author && (
        <div className="col">
          <CardText>
            <small>
              author:{" "}
              <Link prefetch href="/users/[slug]" as={`/users/${author.slug}`}>
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
  );
};

export default CardMeta;
