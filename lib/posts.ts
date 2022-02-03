import { Post } from "../type/post";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export const getAllPostsData = async () => {
  const res = await fetch(apiUrl);
  const posts: Post[] = await res.json();
  return posts;
};

export const getAllPostsIds = async () => {
  const res = await fetch(apiUrl);
  const posts: Post[] = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
};

export const getPostData = async (id: string) => {
  const res = await fetch(`${apiUrl}/${id}`);
  const post: Post = await res.json();
  return post;
};
