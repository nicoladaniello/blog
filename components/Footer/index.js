import React, { useContext } from "react";
import Link from "next/link";
import classnames from "classnames";
import SettingsContext from "../../providers/SettingsContext";
import MenuItemListContainer from "../MenuItemList/container";

const Footer = ({ note, dark, className, ...rest }) => {
  const settings = useContext(SettingsContext);

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
          <Link href="/">
            <a className="navbar-brand">
              {settings ? settings.generalSettingsTitle : "Home"}
            </a>
          </Link>

          <div className="navbar-nav mx-auto">
            <MenuItemListContainer location="FOOTER_MENU" />
          </div>

          <p className="navbar-text ml-auto my-auto">
            <small dangerouslySetInnerHTML={{ __html: note }} />
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
