import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { VFC } from "react";
import { Layout } from "../../components/Layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import { Post as PostType } from "../../type/post";

type Props = {
  post: PostType;
};
const Post: VFC<Props> = (props) => {
  const { post } = props;

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={post.title}>
      <div className="max-w-3xl">
        <p className="mb-1">ID:{post.id}</p>
        <h1 className="text-xl mb-6">{post.title}</h1>
        <p>{post.body}</p>
        <div className="mt-6">
          <Link href="/blog-page">{"<<< Back Blog List Page."}</Link>
        </div>
      </div>
    </Layout>
  );
};
export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = await getPostData(params.id as string);
  return {
    props: { post },
  };
};
