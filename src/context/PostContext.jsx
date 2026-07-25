import { createContext, useState } from "react";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "John Doe",
      content: "Welcome to SocialHub AI! This is my first post.",
      reaction: "👍",
      following: false,
      comments: [],
    },
    {
      id: 2,
      user: "Vinay",
      content: "Learning React step by step 🚀",
      reaction: "👍",
      following: false,
      comments: [],
    },
  ]);

  const addPost = (content) => {
    if (!content.trim()) return;

    const newPost = {
      id: Date.now(),
      user: "You",
      content,
      reaction: "👍",
      following: false,
      comments: [],
    };

    setPosts((prev) => [newPost, ...prev]);
  };

  const changeReaction = (id, reaction) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, reaction } : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const toggleFollow = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, following: !post.following }
          : post
      )
    );
  };

  const addComment = (id, comment) => {
    if (!comment.trim()) return;

    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [...post.comments, comment],
            }
          : post
      )
    );
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        addPost,
        changeReaction,
        deletePost,
        toggleFollow,
        addComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}