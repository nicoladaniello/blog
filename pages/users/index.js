import React from "react";
import { compose } from "recompose";
import withPage from "../../containers/withPage";
import Layout from "../../components/common/Layout";
import PreFooter from "../../components/PreFooter";
import withUsers from "../../containers/withUsers";

import Card from "../../components/common/Card";
import CardImage from "../../components/common/Card/CardImage";
import CardBody from "../../components/common/Card/CardBody";
import CardTitle from "../../components/common/Card/CardTitle";
import CardText from "../../components/common/Card/CardText";

const Index = ({ pageData: { pageBy }, usersData: { users } }) => {
  if (!pageBy) pageBy = { title: "Users" };
  if (!users) return <NotFound page={pageBy} />;

  return (
    <Layout page={pageBy}>
      <section className="mb-5">
        <h4 className="font-weight-bold">Our authors</h4>
        {!!users &&
          users.map(user => (
            <Card key={user.id}>
              {!!user.avatar && (
                <CardImage avatar img={{ sourceUrl: user.avatar.url }} />
              )}
              <CardBody>
                <CardTitle>{user.name}</CardTitle>
                {!!user.description && <CardText>{user.description}</CardText>}
              </CardBody>
            </Card>
          ))}
      </section>

      <PreFooter />
    </Layout>
  );
};

export default compose(
  withPage("users"),
  withUsers()
)(Index);
