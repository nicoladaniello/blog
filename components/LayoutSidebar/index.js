import React from "react";
import PostListWidgetContainer from "../Widgets/PostListWidget/container";
import TagListWidgetContainer from "../Widgets/TagListWidget/container";
import Card from "../common/Card";
import CardBody from "../common/Card/CardBody";
import CardTitle from "../common/Card/CardTitle";
import CardText from "../common/Card/CardText";

const LayoutSidebar = () => {
  return (
    <div>
      <PostListWidgetContainer
        className="mb-5"
        variables={{ tagSlugIn: ["featured"] }}
        title="Featured posts"
      />
      <Card
        shadow={false}
        className="bg-light border-0 mb-5"
        style={{ height: "200px" }}
      >
        <CardBody className="h-100 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <p style={{ fontSize: "2rem" }}>👍</p>
            <CardTitle>Advertisment</CardTitle>
            <CardText>Place your advert here</CardText>
          </div>
        </CardBody>
      </Card>
      <TagListWidgetContainer title="Popular tags" />
    </div>
  );
};

export default LayoutSidebar;
