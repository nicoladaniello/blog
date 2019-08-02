import React, { useContext } from "react";
import Link from "next/link";
import classnames from "classnames";

import NavbarMenu from "../NavbarMenu/index";
import SettingsContext from "../../providers/SettingsContext";
import withMenuItems from "../../containers/withMenuItems";

const Navbar = ({ menuItems, dark, className, ...rest }) => {
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
          {menuItems && (
            <NavbarMenu menuItems={menuItems} className="ml-auto" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default withMenuItems("NAVBAR_MENU")(Navbar);
