import React from "react";
import { storiesOf } from "@storybook/react";
import Link from "next/link";
import ListGroup from ".";

export const listGroupData = [
  { title: "item 1" },
  { title: "item 2" },
  { title: "item 3" },
  { title: "item 4" }
];

const renderItem = ({ item, className }) => (
  <Link prefetch href="/">
    <a className={className}>{item.title}</a>
  </Link>
);

storiesOf("List Group", module)
  .addDecorator(story => <div className="p-5">{story()}</div>)
  .add("default", () => (
    <ListGroup items={listGroupData}>{renderItem}</ListGroup>
  ))
  .add("with flush", () => (
    <ListGroup flush items={listGroupData}>
      {renderItem}
    </ListGroup>
  ));
