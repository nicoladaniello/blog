import React from "react";
import classnames from "classnames";
import MenuItem from "./MenuItem";

const NavbarMenu = ({ menuItems = [], className, ...rest }) => {
  return (
    <ul className={classnames("navbar-nav", className)} {...rest}>
      {menuItems.length > 0 &&
        menuItems.map(item => <MenuItem key={item.id} menuItem={item} />)}
    </ul>
  );
};

export default NavbarMenu;
