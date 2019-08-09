import React from "react";
import Image from "../../../Image";

const CardImage = ({ img, top, avatar, tile }) => {
  return <Image top={top} avatar={avatar} tile={tile} img={img} />;
};

export default CardImage;
