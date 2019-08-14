import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { postFields } from "./withPosts";
import categories from "../pages/categories";

export const getCategory = gql`
  query getCategory($slug: [String]) {
    categories(where: { slug: $slug, shouldOutputInFlatList: true }) {
      nodes {
        id
        name
        slug
        description
        customFields {
          featuredImage {
            id
            sourceUrl
            srcSet
            sizes
            altText
          }
        }
        posts {
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
          }
          nodes {
            ...postFields
          }
        }
        parent {
          id
          name
          slug
          description
          customFields {
            featuredImage {
              id
              sourceUrl
              srcSet
              sizes
              altText
            }
          }
        }
        children {
          nodes {
            id
            name
            slug
            description
            customFields {
              featuredImage {
                id
                sourceUrl
                srcSet
                sizes
                altText
              }
            }
          }
        }
      }
    }
  }
  ${postFields}
`;

const withCategory = graphql(getCategory, {
  options: ({ variables }) => ({ variables }),
  props: ({ data }) => ({
    categoryData: {
      ...data,
      category:
        data.categories && data.categories.nodes.length
          ? data.categories.nodes[0]
          : null
    }
  })
});
export default withCategory;
