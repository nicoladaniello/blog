import React, { Fragment } from "react";
import { compose, withProps } from "recompose";
import { withRouter } from "next/router";
import Link from "next/link";
import withCategory from "../../containers/withCategory";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";
import CategoryList from "../../components/CategoryList/index";
import NotFound from "../../components/NotFound";
import Breadcrumbs from "../../components/Breadcrumbs";
import BreadcrumbItem from "../../components/Breadcrumbs/item";

const CategoryPage = ({ categoryData: { category }, router }) => {
  const title = (
    <Fragment>
      <h1 className="h2 font-weight-bold">
        {category ? category.name : `Not found`}
      </h1>

      <Breadcrumbs dark={category && category.featuredImageUrl}>
        <BreadcrumbItem>
          <Link href="/categories">
            <a>Categories</a>
          </Link>
        </BreadcrumbItem>
        {category && category.parent && (
          <BreadcrumbItem>
            <Link
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
    featuredImage: { sourceUrl: category.featuredImageUrl }
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
