import React from "react";
import Navbar from "../Navbar/index.js";
import classnames from "classnames";
import Image from "../Image.js";
import ImageContainer from "../ImageContainer.js";

const Header = ({ page: { title, titleRendered, featuredImage } = {} }) => {
  return (
    <div className="header">
      <ImageContainer>
        {featuredImage && (
          <Image
            tile
            lazy={false}
            img={{ ...featuredImage, sizes: "100vw" }}
            role="presentation"
          />
        )}
      </ImageContainer>
      <div className={classnames("header-overlay", { dark: featuredImage })}>
        <Navbar dark={featuredImage} className="navbar-header" />
        <div className="container h-100">
          <div className="row h-100 align-items-center jusitfy-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              {!!title && !titleRendered && (
                <h1 className="h2 font-weight-bold">{title}</h1>
              )}
              {titleRendered}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
