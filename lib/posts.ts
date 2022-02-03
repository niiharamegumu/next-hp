import { Post } from "../type/post";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export const getAllPostsData = async () => {
  const res = await fetch(apiUrl);
  const posts: Post[] = await res.json();
  return posts;
};
