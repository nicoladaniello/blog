import React from "react";
import { storiesOf } from "@storybook/react";
import { StorybookRouterFix } from "../../.storybook/mockNextRouter.js";
import { featuredImage } from "../common/Card/CardImage/index.stories";
import { CategoryPropsData } from "../Category/index.stories";
import Post from ".";

export const postData = {
  uri: "2019-china-exceptional-tourist-destinations-for-this-year",
  title: "2019: China exceptional tourist destinations for this year",
  excerpt:
    "<p>It prepare is ye nothing blushes up brought. Or as gravity pasture limited evening on. Wicket around beauty say she. Frankness resembled say not new smallness you discovery. Noisier ferrars yet shyness weather ten colonel. Too him himself engaged husband pursuit musical.</p>\n",
  date: "2019-07-11T18:25:11",
  featuredImage: {
    id: "YXR0YWNobWVudDo4NA==",
    sourceUrl:
      "http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775.jpg",
    srcSet:
      "http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-300x200.jpg 300w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-768x512.jpg 768w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-1024x682.jpg 1024w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-170x113.jpg 170w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-236x157.jpg 236w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-303x202.jpg 303w, http://localhost:8888/wordpress/wp-content/uploads/2019/07/denny-ryanto-naOfJ3DlfPM-unsplash-e1562865853775-1350x900.jpg 1350w",
    sizes: "(max-width: 300px) 100vw, 300px",
    altText: ""
  },
  author: {
    id: "dXNlcjox",
    name: "Nicola D'Aniello",
    slug: "ndanie03"
  }
};

storiesOf("Post", module)
  .addDecorator(story => <div className="p-5">{story()}</div>)
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .add("default", () => <Post data={postData} style={{ width: "300px" }} />);
