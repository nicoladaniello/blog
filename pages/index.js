import Link from "next/link";
import Header from "../components/Header";

const Index = () => (
  <div>
    <Header />
    <p>Hello Next.js</p>
    <Link href="/post/[postId]" as="/post/first-post">
      <a>First Post</a>
    </Link>
  </div>
);

export default Index;
