function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">
      <h2>🚀 SocialHub AI</h2>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </nav>
  );
}

export default Navbar;