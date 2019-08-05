import React, { Fragment } from "react";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";
import { compose, withProps } from "recompose";
import { withRouter } from "next/router";
import ErrorMessage from "../../components/ErrorMessage";
import withCategory from "../../containers/withCategory";
import Link from "next/link";
import CategoryList from "../../components/CategoryList/index";

const CategoryPage = ({ category }) => {
  if (!category)
    return (
      <Layout page={{ title: "Not found" }}>
        <ErrorMessage message="Category not found" />
      </Layout>
    );

  const breadcrumbs = (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-transparent text-light">
        <li className="breadcrumb-item">
          <Link href="/categories">
            <a className="text-light">Categories</a>
          </Link>
        </li>
        {category.parent && (
          <li className="breadcrumb-item">
            <Link
              href="/categories/[slug]"
              as={`/categories/${category.parent.slug}`}
            >
              <a className="text-light">{category.parent.name}</a>
            </Link>
          </li>
        )}
        <li
          className="breadcrumb-item active text-warning font-weight-bold"
          aria-current="page"
        >
          {category.name}
        </li>
      </ol>
    </nav>
  );

  const title = (
    <Fragment>
      <h1 className="h2 font-weight-bold">{category.name}</h1>
      {breadcrumbs}
    </Fragment>
  );

  const page = {
    titleRendered: title,
    featuredImage: { sourceUrl: category.featuredImageUrl }
  };

  return (
    <Layout page={page}>
      {!!category.children.length && (
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
