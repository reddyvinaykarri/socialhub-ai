import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

function CreatePost() {
  const [content, setContent] = useState("");
  const { addPost } = useContext(PostContext);

  const handleSubmit = () => {
    if (!content.trim()) {
      return;
    }

    addPost(content);
    setContent("");
  };

  return (
    <div className="create-post">
      <h2>Create a Post</h2>

      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
      />

      <button onClick={handleSubmit}>
        Create Post
      </button>
    </div>
  );
}

export default CreatePost;