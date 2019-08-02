import React, { useContext } from "react";
import Link from "next/link";
import classnames from "classnames";
import NavbarMenu from "../NavbarMenu";
import withMenuItems from "../../containers/withMenuItems";
import SettingsContext from "../../providers/SettingsContext";

const Footer = ({ menuItems, note, dark, className, ...rest }) => {
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

          {menuItems && (
            <NavbarMenu menuItems={menuItems} className="mx-auto" />
          )}

          <p className="navbar-text ml-auto my-auto">
            <small dangerouslySetInnerHTML={{ __html: note }} />
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default withMenuItems("FOOTER_MENU")(Footer);
