import {
  FaHome,
  FaUser,
  FaPlusCircle,
  FaNewspaper,
  FaHeart,
  FaCog,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>📋 Menu</h2>

      <ul>
        <li className="active">
          <FaHome /> Home
        </li>

        <li>
          <FaUser /> Profile
        </li>

        <li>
          <FaPlusCircle /> Create Post
        </li>

        <li>
          <FaNewspaper /> Feed
        </li>

        <li>
          <FaHeart /> Favorites
        </li>

        <li>
          <FaCog /> Settings
        </li>
      </ul>

      <div className="sidebar-footer">
        <h3>🚀 SocialHub AI</h3>
        <p>Build • Connect • Grow</p>
      </div>
    </div>
  );
}

export default Sidebar;