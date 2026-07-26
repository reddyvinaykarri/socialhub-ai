import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import "./PostCard.css";

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

    if (text.trim() === "") return;

    addComment(postId, text);

    setComments((prev) => ({
      ...prev,
      [postId]: "",
    }));
  };

  return (
    <>
      <h2 className="total-posts">
        Total Posts: {filteredPosts.length}
      </h2>

      {filteredPosts.map((post) => (
        <div className="post-card" key={post.id}>
          <div className="post-header">
            <div className="user-info">
              <div className="avatar">
                {post.user.charAt(0).toUpperCase()}
              </div>

              <div className="user-details">
                <h3>{post.user}</h3>
                <p>🕒 Just now</p>
              </div>
            </div>
          </div>

          <div className="post-content">
            {post.content}
          </div>

          <div className="post-reaction">
            Current Reaction : {post.reaction}
          </div>

          <div className="reaction-box">
            <button onClick={() => changeReaction(post.id, "👍")}>
              👍 Like
            </button>

            <button onClick={() => changeReaction(post.id, "❤️")}>
              ❤️ Love
            </button>

            <button onClick={() => changeReaction(post.id, "😂")}>
              😂 Haha
            </button>

            <button onClick={() => changeReaction(post.id, "😮")}>
              😮 Wow
            </button>

            <button onClick={() => changeReaction(post.id, "😢")}>
              😢 Sad
            </button>
          </div>

          <div className="action-buttons">
            <button
              className="follow-btn"
              onClick={() => toggleFollow(post.id)}
            >
              {post.following ? "Following" : "Follow"}
            </button>

            <button className="share-btn">
              🔄 Share
            </button>

            <button
              className="delete-btn"
              onClick={() => deletePost(post.id)}
            >
              🗑 Delete
            </button>
          </div>

          <div className="comment-section">
            <div className="comment-input">
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
                className="comment-btn"
                onClick={() => handleComment(post.id)}
              >
                💬 Comment
              </button>
            </div>

            <div className="comment-list">
              {post.comments.length === 0 ? (
                <div className="comment-item">
                  <p>No comments yet.</p>
                </div>
              ) : (
                post.comments.map((comment, index) => (
                  <div className="comment-item" key={index}>
                    <p>💬 {comment}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostCard;