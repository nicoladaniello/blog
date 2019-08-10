import React from "react";
import Link from "next/link";
import { compose, withProps } from "recompose";
import withPage from "../../containers/withPage";
import Layout from "../../components/common/Layout";
import PreFooter from "../../components/PreFooter";
import withUsers from "../../containers/withUsers";

import Card from "../../components/common/Card";
import CardBody from "../../components/common/Card/CardBody";
import CardTitle from "../../components/common/Card/CardTitle";
import CardText from "../../components/common/Card/CardText";
import NotFound from "../../components/NotFound";
import Image from "../../components/Image";

const Index = ({ pageData: { pageBy }, usersData: { users } }) => {
  if (!pageBy) pageBy = { title: "Users" };
  if (!users) return <NotFound page={pageBy} />;

  return (
    <Layout page={pageBy}>
      <section className="mb-5">
        <h4 className="font-weight-bold">Our authors</h4>
        {!!users &&
          users.nodes.map(user => (
            <Card key={user.id}>
              {!!user.avatar && (
                <Image avatar img={{ sourceUrl: user.avatar.url }} />
              )}
              <CardBody>
                <CardTitle>
                  <Link href="/users/[slug]" as={`/users/${user.slug}`}>
                    <a>{user.name}</a>
                  </Link>
                </CardTitle>
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
  withProps(() => ({ variables: { uri: "users" } })),
  withPage,
  withUsers
)(Index);
