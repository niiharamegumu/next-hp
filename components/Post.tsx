import Link from "next/link";
import { VFC } from "react";
import { Post as PostType } from "../type/post";

type Props = {
  post: PostType;
};

export const Post: VFC<Props> = (props) => {
  const { post } = props;
  return (
    <div className="mb-2">
      <span className="mr-2">{post.id}：</span>
      <span className="text-blue-500 cursor-pointer hover:text-gray-500">
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </span>
    </div>
  );
};
