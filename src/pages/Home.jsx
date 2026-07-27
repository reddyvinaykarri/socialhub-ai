import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";

function Home() {
  const [search, setSearch] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div className="main-layout">
        <Sidebar />

        <div className="container">
          {/* Dashboard Stats */}
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

          {/* Hero Section */}
          <div className="hero-section">
            <h1>👋 Welcome back, {user ? user.name : "User"}!</h1>

            <p>
              We're happy to see you again. Connect with friends,
              create amazing posts, explore trending content,
              and enjoy your Social Hub  experience.
            </p>

            <div className="hero-buttons">
              <button>Create Post</button>
              <button className="secondary">Explore Feed</button>
            </div>
          </div>

          {/* Create Post */}
          <CreatePost />

          {/* Posts */}
          <PostCard search={search} />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;