import withPosts from "../components/withPosts";
import ErrorMessage from "../components/ErrorMessage";
import Layout from "../components/Layout";
import Teaser from "../components/Teaser";
import PreFooter from "../components/PreFooter";
import Card from "../components/Card";

const Index = ({ data: { error, loading, posts, fetchMore } }) => {
  if (error) return <ErrorMessage message="Error loading posts." />;
  if (loading) return <div>Loading</div>;
  if (!posts || !posts.edges.length)
    return <div className="alert alert-info">Nothing to show yet!</div>;

  const { length } = posts.edges;
  const featuredPost = posts.edges[0].node;
  const recentPosts = posts.edges.slice(1, 4);
  const teaserPost = posts.edges[5].node;
  const maylikePosts = posts.edges.slice(6, length - 1);

  return (
    <Layout title="Home Page" headerData={featuredPost}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <section className="my-5">
              <h4 className="font-weight-bold">Recent stories</h4>
              {recentPosts.map(({ node: post }) => (
                <Card data={post} href="/posts/[uri]" horizontal />
              ))}
            </section>
            {/* 
      <section className="my-5">
        <Teaser fluid post={teaserPost} />
      </section> */}

            <section className="my-5">
              <h4 className="font-weight-bold mb-5">
                You may also be interested in
              </h4>
              <div className="row justify-content-center">
                {maylikePosts.map(({ node: post }) => (
                  <div key={post.id} className="col">
                    <Card data={post} href="/posts/[uri]" />
                  </div>
                ))}
              </div>
            </section>

            <PreFooter />

            <section className="my-5">
              <h4>Meet the Authors</h4>
            </section>
          </div>
          <div className="col-lg-3">
            <p>sidebar</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const postsQueryVars = {
  first: 10
};

export default withPosts(postsQueryVars)(Index);
