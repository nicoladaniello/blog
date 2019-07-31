import { branch, renderComponent } from "recompose";
import ErrorMessage from "../components/ErrorMessage";

const renderWhenError = () =>
  branch(
    props => props.data && props.data.error,
    renderComponent(() => <ErrorMessage message="Error loading posts." />)
  );

export default renderWhenError;
