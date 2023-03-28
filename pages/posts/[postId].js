import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
      // {
      //   params: { postId: "4" },
      // },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}
