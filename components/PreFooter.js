const PreFooter = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-white shadow">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <h3>Subscribe to our newsletter</h3>
            <p className="small text-muted">
              lorem ipsum dolorem defit blad veritum
            </p>
          </div>
          <div className="col">
            <form className="row">
              <input
                type="email"
                className="form-control border-primary col"
                placeholder="example@domain.com"
              />
              <div className="col">
                <button type="submit" className="btn btn-primary">
                  subscribe
                </button>
              </div>
            </form>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
