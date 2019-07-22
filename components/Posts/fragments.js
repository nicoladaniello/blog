import gql from "graphql-tag";

const author = gql`
  fragment PostAuthor on Post {
    author {
      id
      userId
      name
      nicename
      description
      registeredDate
      avatar {
        size
        url
      }
    }
  }
`;

const featuredImage = gql`
  fragment PostFeaturedImage on Post {
    featuredImage {
      sourceUrl
    }
  }
`;

const categories = gql`
  fragment PostCategories on Post {
    categories {
      edges {
        node {
          id
          categoryId
          slug
          name
        }
      }
    }
  }
`;

const tags = gql`
  fragment PostTags on Post {
    tags {
      edges {
        node {
          id
          tagId
          slug
          name
        }
      }
    }
  }
`;

export default {
  author,
  featuredImage,
  categories,
  tags
};
