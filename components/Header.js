import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/posts">
      <a style={linkStyle}>Posts</a>
    </Link>
    <Link href="/categories">
      <a style={linkStyle}>Categories</a>
    </Link>
  </div>
);

export default Header;
