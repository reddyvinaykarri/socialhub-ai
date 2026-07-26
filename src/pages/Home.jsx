import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div className="main-layout">
        <Sidebar />

        <div className="container">

          <div className="stats">
            <div className="card">
              <h2>👥</h2>
              <h3>120</h3>
              <p>Users</p>
            </div>

            <div className="card">
              <h2>📝</h2>
              <h3>24</h3>
              <p>Posts</p>
            </div>

            <div className="card">
              <h2>❤️</h2>
              <h3>356</h3>
              <p>Likes</p>
            </div>

            <div className="card">
              <h2>💬</h2>
              <h3>87</h3>
              <p>Comments</p>
            </div>
          </div>

          <div className="hero-section">
            <h1>Welcome to SocialHub AI 🚀</h1>

            <p>
              Connect with people, create posts, search content,
              follow users, react and comment in real time.
            </p>

            <div className="hero-buttons">
              <button>Create Post</button>
              <button className="secondary">Explore Feed</button>
            </div>
          </div>

          <CreatePost />

          <PostCard search={search} />

        </div>
      </div>
    </>
  );
}

export default Home;