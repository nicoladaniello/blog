import { useRouter } from "next/router";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "../../components/ErrorMessage";
import Header from "../../components/Header";

export const postByUriQuery = gql`
  query postByUri($uri: String!) {
    postBy(uri: $uri) {
      id
      postId
      title
      content
      date
      uri
      author {
        id
        name
        avatar {
          default
          extraAttr
          forceDefault
          foundAvatar
          height
          isRestricted
          rating
          scheme
          size
          url
          width
        }
      }
    }
  }
`;

const Post = () => {
  const router = useRouter();
  const { uri } = router.query;

  return (
    <div>
      <Header />
      <Query query={postByUriQuery} variables={{ uri }}>
        {({ loading, error, data: { postBy } }) => {
          if (error) return <ErrorMessage message="Error loading posts." />;
          if (loading) return <div>Loading</div>;

          console.log(postBy);

          const { title, content, date, author } = postBy;
          return (
            <section>
              <h1>{title}</h1>
              <p>
                <small>{new Date(date).toLocaleDateString()}</small>
              </p>
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <hr />
              <h6>
                <small>Posted by:</small> {author.name}
              </h6>
            </section>
          );
        }}
      </Query>
    </div>
  );
};

export default Post;
