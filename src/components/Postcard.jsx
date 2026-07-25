import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

function PostCard({ search }) {
  const {
    posts,
    changeReaction,
    deletePost,
    toggleFollow,
    addComment,
  } = useContext(PostContext);

  const [comments, setComments] = useState({});

  const filteredPosts = posts.filter((post) =>
    post.content.toLowerCase().includes(search.toLowerCase())
  );

  const handleComment = (postId) => {
    const text = comments[postId] || "";
    addComment(postId, text);

    setComments((prev) => ({
      ...prev,
      [postId]: "",
    }));
  };

  return (
    <>
      <h2>Total Posts: {filteredPosts.length}</h2>

      {filteredPosts.map((post) => (
        <div key={post.id} className="post-card">
          <h3>👤 {post.user}</h3>

          <p>{post.content}</p>

          <h4>Reaction: {post.reaction}</h4>

          <button onClick={() => changeReaction(post.id, "👍")}>👍</button>

          <button onClick={() => changeReaction(post.id, "❤️")}>❤️</button>

          <button onClick={() => changeReaction(post.id, "😂")}>😂</button>

          <button onClick={() => changeReaction(post.id, "😮")}>😮</button>

          <button onClick={() => changeReaction(post.id, "😢")}>😢</button>

          <br /><br />

          <button
            onClick={() => deletePost(post.id)}
            style={{
              backgroundColor: "red",
              color: "white",
            }}
          >
            🗑 Delete
          </button>

          <button
            onClick={() => toggleFollow(post.id)}
            style={{
              marginLeft: "10px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            {post.following ? "Following" : "Follow"}
          </button>

          <hr />

          <input
            type="text"
            placeholder="Write a comment..."
            value={comments[post.id] || ""}
            onChange={(e) =>
              setComments({
                ...comments,
                [post.id]: e.target.value,
              })
            }
          />

          <button
            onClick={() => handleComment(post.id)}
            style={{ marginLeft: "10px" }}
          >
            💬 Comment
          </button>

          <div style={{ marginTop: "10px" }}>
            <h4>Comments</h4>

            {post.comments.length === 0 ? (
              <p>No comments yet.</p>
            ) : (
              post.comments.map((comment, index) => (
                <p key={index}>💬 {comment}</p>
              ))
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default PostCard;