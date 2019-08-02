import React from "react";
import Navbar from "../Navbar/index.js";
import classnames from "classnames";

const Header = ({ page: { title, featuredImage } = {} }) => {
  const jumboProps = {
    style: featuredImage
      ? { backgroundImage: `url('${featuredImage.sourceUrl}')` }
      : undefined,
    className: classnames("jumbotron jumbotron-fluid jumbotron-header", {
      "jumbotron-image": featuredImage
    })
  };

  const overlayProps = {
    className: classnames("d-flex h-100", {
      "jumbotron-overlay text-light": featuredImage
    })
  };

  return (
    <div {...jumboProps}>
      <div {...overlayProps}>
        <Navbar dark={featuredImage} className="navbar-header" />
        <div className="container h-100">
          <div className="row h-100 align-items-center jusitfy-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              {title && <h1 className="h2 font-weight-bold">{title}</h1>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
