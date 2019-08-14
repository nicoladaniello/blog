import React, { Fragment } from "react";
import { compose, withProps } from "recompose";
import { withRouter } from "next/router";
import Link from "next/link";
import nprogress from "nprogress";
import BreadcrumbItem from "../../components/Breadcrumbs/item";
import CategoryList from "../../components/CategoryList/index";
import withCategory from "../../containers/withCategory";
import Breadcrumbs from "../../components/Breadcrumbs";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";
import NotFound from "../../components/NotFound";

const CategoryPage = ({ categoryData: { category, loading }, router }) => {
  if (process.browser && !loading) nprogress.done();
  if (loading) return <Layout />;
  if (!category) return <NotFound />;

  const title = (
    <Fragment>
      <h1 className="h2 font-weight-bold">
        {category ? category.name : `Not found`}
      </h1>

      <Breadcrumbs dark={category && category.customFields.featuredImage}>
        <BreadcrumbItem>
          <Link prefetch href="/categories">
            <a>Categories</a>
          </Link>
        </BreadcrumbItem>
        {category && category.parent && (
          <BreadcrumbItem>
            <Link
              prefetch
              href="/categories/[slug]"
              as={`/categories/${category.parent.slug}`}
            >
              <a>{category.parent.name}</a>
            </Link>
          </BreadcrumbItem>
        )}
        <BreadcrumbItem>
          {category ? category.name : router.query.slug}
        </BreadcrumbItem>
      </Breadcrumbs>
    </Fragment>
  );
  if (!category) return <NotFound page={{ titleRendered: title }} />;

  const page = {
    titleRendered: title,
    featuredImage: category.customFields.featuredImage
  };

  return (
    <Layout page={page}>
      {category.children && !!category.children.nodes.length && (
        <Fragment>
          <h2 className="font-weight-bold">Sub topics</h2>
          <CategoryList categories={category.children} />
        </Fragment>
      )}
      <h2 className="font-weight-bold">Posts</h2>
      <PostList posts={category.posts} />
    </Layout>
  );
};

export default compose(
  withRouter,
  withProps(({ router }) => ({ variables: { slug: [router.query.slug] } })),
  withCategory
)(CategoryPage);
