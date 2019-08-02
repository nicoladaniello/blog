import React, { useState, Fragment } from "react";
import classnames from "classnames";
import Link from "next/link";

const MenuItem = ({
  menuItem: { id, url, label, childItems, className, ...rest } = {}
}) => {
  let [toggle, setToggle] = useState(false);
  const hasChildItems = childItems.length > 0;

  const showMenu = () => setToggle((toggle = true));
  const hideMenu = () => setToggle((toggle = false));

  return (
    <li
      key={id}
      className={classnames("nav-item", { dropdown: hasChildItems })}
    >
      <Link href={url}>
        <a
          className={classnames(
            "nav-link",
            {
              "dropdown-toggle": hasChildItems
            },
            className
          )}
          onMouseOver={showMenu}
          onMouseLeave={hideMenu}
          {...rest}
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
          {childItems.map(item => (
            <Link key={item.id} href={item.url}>
              <a className="dropdown-item">{item.label}</a>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default MenuItem;
