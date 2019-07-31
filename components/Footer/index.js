import React from "react";
import classnames from "classnames";

import Link from "../Link";
import NavbarMenu from "../NavbarMenu";

const Footer = ({
  settings: { title } = {},
  menu = {},
  note,
  dark,
  className,
  ...rest
}) => {
  return (
    <footer className="footer">
      <nav
        className={classnames(
          "navbar",
          { "navbar-light": !dark, "navbar-dark": dark },
          className
        )}
        {...rest}
      >
        <div className="container">
          {title && (
            <Link href="/">
              <a className="navbar-brand">{title}</a>
            </Link>
          )}

          <NavbarMenu menu={menu} className="mx-auto" />

          <p className="navbar-text ml-auto my-auto">
            <small dangerouslySetInnerHTML={{ __html: note }} />
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
