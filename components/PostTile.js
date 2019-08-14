import Tile from "./Tile";
import CardTitle from "./Card/title";

const PostTile = ({ post, className }) => {
  const { title, uri, featuredImage } = post;
  return (
    <Tile img={featuredImage} uri={uri} className={className}>
      <CardTitle href="/posts/[uri]" as={`/posts/${uri}`}>
        {title}
      </CardTitle>
    </Tile>
  );
};

export default PostTile;
