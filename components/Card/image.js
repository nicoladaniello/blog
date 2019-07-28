import Link from "next/link";
import classnames from "classnames";
import Image from "../Image";

const CardImage = ({ img, linkProps, top, className }) => {
  return (
    <Link {...linkProps}>
      <a>
        <Image
          img={img}
          className={classnames(
            { "card-img-top": top, "card-img": !top },
            className
          )}
        />
        <style jsx>
          {`
            .card-img-top {
              height: 200px;
              object-fit: cover;
            }
          `}
        </style>
      </a>
    </Link>
  );
};

export default CardImage;
