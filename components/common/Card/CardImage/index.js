import React from "react";
import classnames from "classnames";
import Image from "../../../Image";

const CardImage = ({ img, thumbnail, avatar, className, ...rest }) => {
  return img && img.sourceUrl ? (
    <Image
      thumbnail={thumbnail}
      img={img}
      className={classnames(
        {
          "card-img-top": thumbnail,
          "card-img-avatar": avatar,
          "card-img": !thumbnail && !avatar
        },
        className
      )}
      {...rest}
    />
  ) : (
    ""
  );
};

export default CardImage;
