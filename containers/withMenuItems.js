import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { compose } from "recompose";
import renderWhenLoading from "./renderWhenLoading";
import renderWhenError from "./renderWhenError";

const getMenuItems = gql`
  query getMenuItems($location: MenuLocationEnum) {
    menuItems(where: { location: $location }) {
      nodes {
        id
        menuItemId
        label
        url
      }
    }
  }
`;

const withMenuItems = location =>
  compose(
    graphql(getMenuItems, {
      options: { variables: { location } },
      props: ({ data }) => ({
        menuItems: data.menuItems ? data.menuItems.nodes : null
      })
    }),
    renderWhenLoading(),
    renderWhenError()
  );
export default withMenuItems;
