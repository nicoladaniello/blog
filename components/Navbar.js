import Link from "next/link";
import NavbarMenu from "./NavbarMenu";
import classnames from "classnames";

const Navbar = ({ className }) => {
  return (
    <nav className={classnames("navbar navbar-expand-lg", className)}>
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Navbar</a>
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse">
          <NavbarMenu className="ml-auto" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
