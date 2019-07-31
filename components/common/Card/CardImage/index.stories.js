import React from "react";
import { storiesOf } from "@storybook/react";

import CardImage from ".";

export const featuredImage = {
  id: "YXR0YWNobWVudDo4NA==",
  srcSet:
    "http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-300x200.jpg 300w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-768x512.jpg 768w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-1024x682.jpg 1024w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-170x113.jpg 170w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-236x157.jpg 236w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-303x202.jpg 303w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-1350x900.jpg 1350w",
  sizes: "(max-width: 300px) 100vw, 300px",
  sourceUrl:
    "http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775.jpg",
  altText: ""
};

storiesOf("CardImage", module)
  .add("default", () => (
    <CardImage img={featuredImage} style={{ width: "300px" }} />
  ))
  .add("thumbnail", () => (
    <CardImage thumbnail img={featuredImage} style={{ width: "300px" }} />
  ));
