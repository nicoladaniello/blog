import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import renderWhenLoading from "./renderWhenLoading";
import renderWhenError from "./renderWhenError";

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

const withMenuItems = location =>
  compose(
    graphql(getMenuItems, {
      options: { variables: { location } },
      props: ({ data }) => {
        if (!data.menuItems) return null;
        return {
          menuItems: [
            ...data.menuItems.nodes.map(item => {
              if (item.childItems)
                return { ...item, childItems: item.childItems.nodes };
            })
          ]
        };
      }
    }),
    renderWhenLoading(),
    renderWhenError()
  );
export default withMenuItems;
