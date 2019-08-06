import React from "react";
import { compose, withProps } from "recompose";
import Layout from "../../components/common/Layout";
import withCategories from "../../containers/withCategories";
import CategoryList from "../../components/CategoryList";
import withPage from "../../containers/withPage";
import NotFound from "../../components/NotFound";

const Categories = ({
  pageData: { pageBy },
  categoriesData: { categories }
}) => {
  if (!pageBy) pageBy = { title: "Categories" };
  if (!categories) return <NotFound page={pageBy} />;

  return (
    <Layout page={pageBy}>
      <CategoryList categories={categories} />
    </Layout>
  );
};

export default compose(
  withProps(() => ({ variables: { uri: "categories" } })),
  withPage,
  withCategories
)(Categories);
