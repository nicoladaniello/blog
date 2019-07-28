import { Fragment } from "react";
import CardImage from "./image";

const CardVertical = ({ featuredImage, linkProps, children }) => {
  return (
    <Fragment>
      {featuredImage && (
        <CardImage top img={featuredImage} linkProps={linkProps} />
      )}
      <div className="card-body">{children}</div>
    </Fragment>
  );
};

export default CardVertical;
