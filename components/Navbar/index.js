import React, { useContext } from "react";
import Link from "next/link";
import classnames from "classnames";
import SettingsContext from "../../providers/SettingsContext";
import MenuItemListContainer from "../MenuItemList/container";

const Navbar = ({ dark, className, ...rest }) => {
  const settings = useContext(SettingsContext);

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
        <Link href="/">
          <a className="navbar-brand">
            {settings ? settings.generalSettingsTitle : "Home"}
          </a>
        </Link>

        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse">
          <div className="navbar-nav ml-auto">
            <MenuItemListContainer location="NAVBAR_MENU" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
