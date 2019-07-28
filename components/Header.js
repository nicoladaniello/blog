import Link from "next/link";
import Navbar from "./Navbar";
import { stripHtml } from "../util";

const Header = ({ data: { featuredImage, title, excerpt, uri } }) => {
  const bgImage = { backgroundImage: `url('${featuredImage.sourceUrl}')` };
  return (
    <header
      className="jumbotron jumbotron-fluid jumbotron-image jumbotron-header"
      style={bgImage}
    >
      <div className="jumbotron-overlay text-light">
        <Navbar className="navbar-header navbar-dark" />
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="text-light text-center">
                <h1 className="h2 font-weight-bold">{title}</h1>
                <Link href="/blog/[uri]" as={`/blog/${uri}`}>
                  <button className="btn btn-primary mt-4">Read now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
