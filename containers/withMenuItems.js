import { graphql } from "react-apollo";
import gql from "graphql-tag";

export const getMenuItems = gql`
  query getMenuItems($location: MenuLocationEnum) {
    menuItems(where: { location: $location }) {
      nodes {
        id
        menuItemId
        label
        url
        childItems {
          nodes {
            id
            menuItemId
            label
            url
          }
        }
      }
    }
  }
`;

const withMenuItems = graphql(getMenuItems, {
  options: ({ variables }) => ({ variables })
});
export default withMenuItems;
