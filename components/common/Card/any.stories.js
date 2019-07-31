import React from "react";
import { storiesOf } from "@storybook/react";

import Card from ".";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardText from "./CardText";
import CardHorizontal from "./CardHorizontal";
import Category from "../../Category";

import { featuredImage } from "./CardImage/index.stories";
import { CategoryPropsData } from "../../Category/index.stories";

storiesOf("Card", module)
  .add("default", () => (
    <Card style={{ width: "300px" }}>
      <CardBody>
        <Category {...CategoryPropsData} />
        <CardTitle>Default Card</CardTitle>
        <CardText>With some dummy text</CardText>
      </CardBody>
    </Card>
  ))
  .add("with thumbnail", () => (
    <Card style={{ width: "300px" }}>
      <CardImage thumbnail img={featuredImage} />
      <CardBody>
        <Category {...CategoryPropsData} />
        <CardTitle>Default Card with thumbnail</CardTitle>
        <CardText>With some dummy text</CardText>
      </CardBody>
    </Card>
  ))
  .add("with avatar", () => (
    <Card style={{ width: "300px" }}>
      <CardImage avatar img={featuredImage} />
      <CardBody>
        <CardTitle>Default Card with avatar</CardTitle>
        <CardText>With some dummy text</CardText>
      </CardBody>
    </Card>
  ))
  .add("transparent", () => (
    <Card transparent style={{ width: "300px" }}>
      <CardImage thumbnail img={featuredImage} />
      <CardBody>
        <Category {...CategoryPropsData} />
        <CardTitle>Default Card with transparency</CardTitle>
        <CardText>With some dummy text</CardText>
      </CardBody>
    </Card>
  ))
  .add("horizontal", () => (
    <Card style={{ margin: "1rem 5rem" }}>
      <CardHorizontal
        renderLeft={<CardImage thumbnail img={featuredImage} />}
        renderRight={
          <CardBody>
            <Category {...CategoryPropsData} />
            <CardTitle>Default Card with transparency</CardTitle>
            <CardText>With some dummy text</CardText>
          </CardBody>
        }
      />
    </Card>
  ))
  .add("horizontal and transparent", () => (
    <Card transparent style={{ margin: "1rem 5rem" }}>
      <CardHorizontal
        renderLeft={<CardImage thumbnail img={featuredImage} />}
        renderRight={
          <CardBody>
            <Category {...CategoryPropsData} />
            <CardTitle>Default Card with transparency</CardTitle>
            <CardText>With some dummy text</CardText>
          </CardBody>
        }
      />
    </Card>
  ));
