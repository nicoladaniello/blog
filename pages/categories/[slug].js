import { withRouter } from "next/router";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "../../components/ErrorMessage";
import Header from "../../components/Header";
import Link from "next/link";

export const categoryBySlugQuery = gql`
  query categoryBySlug($slug: String!, $afterPost: String) {
    categories(where: { slug: [$slug] }) {
      nodes {
        id
        categoryId
        name
        slug
        description
        posts(first: 2, after: $afterPost) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            cursor
            node {
              id
              postId
              uri
              title
              excerpt
              date
              author {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const Category = ({ router }) => {
  const { slug } = router.query;

  return (
    <div>
      <Header />
      <Query query={categoryBySlugQuery} variables={{ slug }}>
        {({ loading, error, data: { categories }, fetchMore }) => {
          if (error) return <ErrorMessage message="Error loading Category." />;
          if (loading) return <div>Loading</div>;

          const category = categories.nodes[0];
          const { name, description, posts } = category;
          const { pageInfo: postsPageInfo, edges: postList } = posts;
          return (
            <section>
              <h1>{name}</h1>
              <p>{description}</p>

              <h2>Posts</h2>
              {postList.map(({ node: post }) => (
                <div key={post.id}>
                  <h3>
                    <Link href="/posts/[uri]" as={`/categories/${post.uri}`}>
                      <a>{post.title}</a>
                    </Link>
                  </h3>
                  <p>
                    <small>
                      by: {post.author.name} written on:{" "}
                      {new Date(post.date).toLocaleDateString()}
                    </small>
                  </p>
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
              ))}
              {postsPageInfo.hasNextPage ? (
                <button
                  onClick={() =>
                    loadMorePosts(postsPageInfo.endCursor, fetchMore)
                  }
                >
                  {" "}
                  {loading ? "Loading..." : "Next page"}{" "}
                </button>
              ) : (
                ""
              )}
            </section>
          );
        }}
      </Query>
    </div>
  );
};

function loadMorePosts(endCursor, fetchMore) {
  fetchMore({
    variables: {
      afterPost: endCursor
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult;
      return fetchMoreResult;
    }
  });
}

export default withRouter(Category);
