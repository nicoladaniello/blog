import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";
import Link from "next/link";

export const allCategoriesQuery = gql`
  query allCategories($first: Int, $before: String, $after: String) {
    categories(first: $first, before: $before, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          categoryId
          name
          slug
        }
      }
    }
  }
`;

export const allCategoriesQueryVars = {
  first: 10,
  after: null
};

export default function CategoryList() {
  return (
    <Query query={allCategoriesQuery} variables={allCategoriesQueryVars}>
      {({ loading, error, data: { categories }, fetchMore }) => {
        if (error) return <ErrorMessage message="Error loading categories." />;
        if (loading) return <div>Loading</div>;

        const { hasNextPage, endCursor } = categories.pageInfo;
        return (
          <section>
            <ul>
              {categories.edges.map(({ node: cat }, index) => (
                <li key={cat.id}>
                  <div>
                    <span>{index + 1}. </span>
                    <Link
                      href="/categories/[slug]"
                      as={`/categories/${cat.slug}`}
                    >
                      <a>{cat.name}</a>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            {hasNextPage ? (
              <button onClick={() => loadMoreCategories(endCursor, fetchMore)}>
                {" "}
                {loading ? "Loading..." : "Next page"}{" "}
              </button>
            ) : (
              ""
            )}
            <style jsx>{`
              section {
                padding-bottom: 20px;
              }
              li {
                display: block;
                margin-bottom: 10px;
              }
              div {
                align-items: center;
                display: flex;
              }
              a {
                font-size: 14px;
                margin-right: 10px;
                text-decoration: none;
                padding-bottom: 0;
                border: 0;
              }
              span {
                font-size: 14px;
                margin-right: 5px;
              }
              ul {
                margin: 0;
                padding: 0;
              }
              button:before {
                align-self: center;
                border-style: solid;
                border-width: 6px 4px 0 4px;
                border-color: #ffffff transparent transparent transparent;
                content: "";
                height: 0;
                margin-right: 5px;
                width: 0;
              }
            `}</style>
          </section>
        );
      }}
    </Query>
  );
}

function loadMoreCategories(endCursor, fetchMore) {
  fetchMore({
    variables: {
      ...allCategoriesQueryVars,
      after: endCursor
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult;

      return {
        categories: {
          ...fetchMoreResult.categories,
          edges: [
            ...previousResult.categories.edges,
            ...fetchMoreResult.categories.edges
          ]
        }
      };
    }
  });
}
