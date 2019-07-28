import Tile from "./Tile";
import CardTitle from "./Card/title";

const PostTile = ({ post, className }) => {
  const { title, uri, featuredImage } = post;
  return (
    <Tile img={featuredImage} uri={uri} className={className}>
      <CardTitle title={title} href="/posts/[uri]" as={`/posts/${uri}`} />
    </Tile>
  );
};

export default PostTile;
