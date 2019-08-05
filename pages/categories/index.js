import React from "react";
import { compose } from "recompose";
import withPage from "../../containers/withPage";
import Layout from "../../components/common/Layout";
import withCategories from "../../containers/withCategories";
import Category from "../../components/Category";

const Categories = ({ page, categories }) => {
  return (
    <Layout page={page}>
      {categories &&
        categories.categories.map(cat => (
          <Category key={cat.id} category={cat} />
        ))}
    </Layout>
  );
};

export default compose(
  withPage("categories"),
  withCategories
)(Categories);
