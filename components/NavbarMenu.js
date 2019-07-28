import { useContext } from "react";
import Link from "next/link";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import classnames from "classnames";
import ErrorMessage from "./ErrorMessage";
import SettingsContext from "../providers/SettingsContext";

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

const NavbarMenu = ({ className }) => {
  const { generalSettingsUrl } = useContext(SettingsContext);
  return (
    <Query query={getMenu} variables={{ location: "NAVBAR_MENU" }}>
      {({ loading, data: { menus }, error }) => {
        if (error) return <ErrorMessage message="Error loading navbar menu." />;
        if (loading) return <div>Loading</div>;

        const menu = menus.nodes[0];
        return (
          <ul className={classnames("navbar-nav", className)}>
            {menu.menuItems.nodes.length &&
              menu.menuItems.nodes.map(item => (
                <li key={item.id} className="nav-item">
                  <Link href={item.url.replace(generalSettingsUrl, "")}>
                    <a className="nav-link">{item.label}</a>
                  </Link>
                </li>
              ))}
          </ul>
        );
      }}
    </Query>
  );
};

export default NavbarMenu;
