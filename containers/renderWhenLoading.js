import { branch, renderComponent } from "recompose";

const renderWhenLoading = () =>
  branch(
    props => props.data && props.data.loading,
    renderComponent(() => <div className="spinner-border text-primary" />)
  );

export default renderWhenLoading;
