import { withProps, compose } from "recompose";
import withTags from "../../../containers/withTags";
import TagListWidget from ".";

const TagListWidgetContainer = compose(
  withProps(props => ({ ...props })),
  withTags
)(TagListWidget);

export default TagListWidgetContainer;
