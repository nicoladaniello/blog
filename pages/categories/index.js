import React from "react";
import { compose, withProps } from "recompose";
import nprogress from "nprogress";
import Layout from "../../components/common/Layout";
import withCategories from "../../containers/withCategories";
import CategoryList from "../../components/CategoryList";
import withPage from "../../containers/withPage";

const Categories = ({
  pageData: { pageBy, loading: pageLoading },
  categoriesData: { categories, loading: dataLoading }
}) => {
  if (process.browser) {
    if (!pageLoading) nprogress.inc();
    if (!dataLoading) nprogress.inc();
    if (!pageLoading && !dataLoading) nprogress.done();
  }
  if (pageLoading) return <Layout />;
  if (!pageBy) pageBy = { title: "Categories" };

  return (
    <Layout page={pageBy}>
      {dataLoading ? (
        <div className="spinner-border" />
      ) : (
        <CategoryList categories={categories} />
      )}
    </Layout>
  );
};

export default compose(
  withCategories,
  withProps(() => ({ variables: { uri: "np_categories" } })),
  withPage
)(Categories);
