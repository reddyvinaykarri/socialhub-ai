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
          <CreatePost />
          <PostCard search={search} />
        </div>
      </div>
    </>
  );
}

export default Home;