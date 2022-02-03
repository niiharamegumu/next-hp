import { VFC } from "react";
import { Post as PostType } from "../type/post";

type Props = {
  id: number;
  post: PostType;
};

export const Post: VFC<Props> = (props) => {
  const { id, post } = props;
  return (
    <div>
      {id} :{" "}
      <span className="text-blue-500 cursor-pointer hover:text-gray-500">
        {post.title}
      </span>
    </div>
  );
};
