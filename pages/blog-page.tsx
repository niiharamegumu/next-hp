import { GetStaticProps } from "next";
import { VFC } from "react";
import { Layout } from "../components/Layout";
import { Post } from "../components/Post";
import { getAllPostsData } from "../lib/posts";
import { Post as PostType } from "../type/post";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};

type Props = {
  posts: PostType[];
};

const Blog: VFC<Props> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <h1 className="my-10 text-3xl">Blog Page</h1>
      <ul className="mb-20">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;
