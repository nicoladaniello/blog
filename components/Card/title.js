import Link from "next/link";

const CardTitle = ({ linkProps, children }) => {
  return (
    <h5>
      <Link {...linkProps}>
        <a className="card-title">{children}</a>
      </Link>
    </h5>
  );
};

export default CardTitle;
