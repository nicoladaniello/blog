import React, { useState } from "react";
import classnames from "classnames";
import Link from "next/link";

const MenuItem = ({ menuItem: { url, label, childItems, className } = {} }) => {
  let [toggle, setToggle] = useState(false);
  const hasChildItems = childItems && childItems.nodes.length > 0;

  const showMenu = () => setToggle((toggle = true));
  const hideMenu = () => setToggle((toggle = false));

  return (
    <li
      className={classnames("nav-item", { dropdown: hasChildItems }, className)}
    >
      <Link prefetch href={url}>
        <a
          className={classnames("nav-link", {
            "dropdown-toggle": hasChildItems
          })}
          onMouseOver={showMenu}
          onMouseLeave={hideMenu}
        >
          {label}
        </a>
      </Link>
      {hasChildItems && (
        <div
          className={classnames("dropdown-menu shadow", { "d-block": toggle })}
          onMouseOver={showMenu}
          onMouseLeave={hideMenu}
        >
          {childItems.nodes.map(item => (
            <Link prefetch key={item.id} href={item.url}>
              <a className="dropdown-item">{item.label}</a>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default MenuItem;
