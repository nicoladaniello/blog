import React from "react";
import classnames from "classnames";
import MenuItem from "./MenuItem";

const MenuItemList = ({
  data: { menuItems, loading, error } = {},
  location,
  className,
  ...rest
}) => {
  if (loading) return <div className="spinner-border" />;
  if (error || !menuItems) return <div />;

  return (
    <ul className={classnames("navbar-nav", className)} {...rest}>
      {!!menuItems.nodes.length &&
        menuItems.nodes.map(item => <MenuItem key={item.id} menuItem={item} />)}
    </ul>
  );
};

export default MenuItemList;
