import { withRouter } from "next/router";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "../../components/ErrorMessage";
import Layout from "../../components/Layout";

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

const Post = ({ router }) => {
  const { uri } = router.query;

  return (
    <Layout>
      <Query query={postByUriQuery} variables={{ uri }}>
        {({ loading, error, data: { postBy } }) => {
          if (error) return <ErrorMessage message="Error loading posts." />;
          if (loading) return <div>Loading</div>;

          const { title, content, date, author } = postBy;
          return (
            <section>
              <h1>{title}</h1>
              <p>
                <u>{date} </u>
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
    </Layout>
  );
};

export default withRouter(Post);
