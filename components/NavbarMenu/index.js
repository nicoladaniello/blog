import React from "react";
import classnames from "classnames";
import Link from "next/link";

const NavbarMenu = ({ menu, className, ...rest }) => {
  // const { generalSettingsUrl } = useContext(SettingsContext);
  return (
    <ul className={classnames("navbar-nav", className)} {...rest}>
      {menu &&
        menu.menuItems &&
        menu.menuItems.map(item => (
          <li key={item.id} className="nav-item">
            <Link href={item.url}>
              <a className="nav-link">{item.label}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default NavbarMenu;
