import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Title</a>
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Blog</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Legal</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Contact us</a>
                </Link>
              </li>
            </ul>
            <p className="navbar-text ml-auto my-auto">
              <small>© 2019, Designed by Invision. Coded by Creative Tim</small>
            </p>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
