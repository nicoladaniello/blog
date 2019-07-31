import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import NavbarMenu from ".";

export const getMenu = gql`
  query getMenu($location: MenuLocationEnum) {
    menus(where: { location: $location }) {
      nodes {
        id
        menuId
        name
        menuItems {
          nodes {
            id
            menuItemId
            url
            label
          }
        }
      }
    }
  }
`;

export default compose(
  graphql(getMenu, {
    options: {
      variables: {}
    },
    props: ({ menus }) => ({
      menu: menus.nodes[0] ? menus.nodes[0] : null
    })
  })
)(NavbarMenu);
