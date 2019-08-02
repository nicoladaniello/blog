import React from "react";
import classnames from "classnames";
import MenuItem from "./MenuItem";

const NavbarMenu = ({ menuItems = [], className, ...rest }) => {
  return (
    <ul className={classnames("navbar-nav", className)} {...rest}>
      {menuItems.map(item => (
        <MenuItem menuItem={item} />
      ))}
    </ul>
  );
};

export default NavbarMenu;
