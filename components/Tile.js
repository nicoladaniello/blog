import classnames from "classnames";
import CardImage from "./Card/image";

const Tile = ({ img, uri, className, children }) => {
  return (
    <div className={classnames("card tile", className)}>
      <CardImage
        className="shadow"
        img={img}
        href="/posts/[uri]"
        as={`/posts/${uri}`}
      />
      <div className="card-img-overlay">{children}</div>
    </div>
  );
};

export default Tile;
