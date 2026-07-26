import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ search, setSearch }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        🚀 <span>SocialHub AI</span>
      </div>

      <input
        type="text"
        className="search-bar"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="nav-right">
        <span className="username">
          Hi, {user ? user.name : "User"}
        </span>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;