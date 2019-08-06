import React, { useContext, useState } from "react";
import Link from "next/link";
import classnames from "classnames";
import SettingsContext from "../../providers/SettingsContext";
import MenuItemListContainer from "../MenuItemList/container";

const Navbar = ({ dark, className, ...rest }) => {
  const settings = useContext(SettingsContext);
  let [collapse, setCollapse] = useState(false);

  return (
    <nav
      className={classnames(
        "navbar navbar-expand-lg",
        { "navbar-light": !dark, "navbar-dark": dark },
        className
      )}
      {...rest}
    >
      <div className="container">
        <Link prefetch href="/">
          <a className="navbar-brand">
            {settings ? settings.generalSettingsTitle : "Home"}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setCollapse((collapse = !collapse))}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={classnames("collapse navbar-collapse", {
            show: collapse
          })}
        >
          {collapse && (
            <button
              type="button"
              className="close d-block d-lg-none"
              onClick={() => setCollapse((collapse = !collapse))}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          )}
          <div className="navbar-nav ml-auto">
            <MenuItemListContainer location="NAVBAR_MENU" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
