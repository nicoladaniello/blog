import React, { useContext } from "react";
import classnames from "classnames";
import NavbarMenu from "../NavbarMenu/index";
import Link from "next/link";
import NavbarContext from "../../providers/NavbarContext";

const Navbar = ({
  settings: { title } = {},
  menu = {},
  dark,
  className,
  ...rest
}) => {
  const navbar = useContext(NavbarContext);
  console.log(navbar);

  return (
    <nav
      className={classnames(
        "navbar navbar-expand-md",
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

        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse">
          <NavbarMenu menu={menu} className="ml-auto" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
