import React from "react";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Posts = () => {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </>
  );
};

export default Posts;
