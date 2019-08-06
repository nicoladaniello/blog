import { branch, renderComponent } from "recompose";

const renderWhenError = (component, propName = "data") =>
  branch(
    props => props[propName] && props[propName].error,
    renderComponent(component)
  );

export default renderWhenError;
