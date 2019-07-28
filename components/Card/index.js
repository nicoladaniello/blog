import classnames from "classnames";
import CardTitle from "./title";
import CardHorizontal from "./horizontal";
import CardVertical from "./vertical";
import CardExcerpt from "./excerpt";
import CardTile from "./tile";

const Card = ({ data, href, horizontal, tile, className, children }) => {
  const { title, excerpt, uri, slug } = data;
  const linkProps = { href, as: href.replace(/\[(.*?)\]/, uri || slug) };

  return (
    <div
      className={classnames(
        "card",
        { "card-horizontal": horizontal, "card-tile": tile },
        className
      )}
    >
      <RenderBody
        data={data}
        linkProps={linkProps}
        horizontal={horizontal}
        tile={tile}
      >
        {title && <CardTitle linkProps={linkProps}>{title}</CardTitle>}
        {excerpt && <CardExcerpt>{excerpt}</CardExcerpt>}
        {children}
      </RenderBody>
    </div>
  );
};

const RenderBody = ({
  data: { featuredImage },
  horizontal,
  tile,
  linkProps,
  children
}) => {
  return horizontal ? (
    <CardHorizontal linkProps={linkProps} featuredImage={featuredImage}>
      {children}
    </CardHorizontal>
  ) : tile ? (
    <CardTile linkProps={linkProps} featuredImage={featuredImage}>
      {children}
    </CardTile>
  ) : (
    <CardVertical linkProps={linkProps} featuredImage={featuredImage}>
      {children}
    </CardVertical>
  );
};

export default Card;
