import { withProps, compose } from "recompose";
import withMenuItems from "../../containers/withMenuItems";
import MenuItemList from ".";

const MenuItemListContainer = compose(
  withProps(({ location }) => ({ variables: { location } })),
  withMenuItems
)(MenuItemList);

export default MenuItemListContainer;
