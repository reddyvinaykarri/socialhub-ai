import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar search="" setSearch={() => {}} />

      <div className="main-layout">
        <Sidebar />

        <div className="container">
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "#2563eb",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
                fontWeight: "bold",
                margin: "0 auto 20px",
              }}
            >
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <h2>{user?.name || "User"}</h2>

            <p style={{ color: "#666", marginTop: "10px" }}>
              {user?.email || "No Email"}
            </p>

            <hr style={{ margin: "25px 0" }} />

            <h3>Profile Information</h3>

            <p style={{ marginTop: "15px" }}>
              <strong>Name:</strong> {user?.name}
            </p>

            <p style={{ marginTop: "10px" }}>
              <strong>Email:</strong> {user?.email}
            </p>

            <p style={{ marginTop: "10px" }}>
              <strong>Status:</strong> Active User ✅
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;