import Image from "./Image";
import Link from "next/link";
import classnames from "classnames";

const Teaser = ({
  post: { title, featuredImage, uri, excerpt },
  fluid,
  className
}) => {
  return (
    <div
      className={classnames(
        "jumbotron",
        { "jumbotron-fluid": fluid },
        className
      )}
    >
      <div className="container">
        <div className="row justify-content-center">
          {featuredImage && (
            <div className="col-md-6 col-sm-5 col-xs-12">
              <div className="d-flex justify-content-center mt-4">
                <Image img={featuredImage} />
              </div>
            </div>
          )}
          <div className="col-md-6 col-sm-5">
            <h6 className="badge badge-warning">Featured</h6>
            <h2 className="mb-4">{title}</h2>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <Link href="/posts/[uri]" as={`/posts/${uri}`}>
              <button className="btn btn-primary">Read article</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaser;
