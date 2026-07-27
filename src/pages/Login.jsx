import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (email === user.email && password === user.password) {
      alert("Login Successful!");
      navigate("/home");
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>🚀 Social Hub</h1>
        <p>Welcome Back</p>

        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                userSelect: "none",
                fontSize: "18px",
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;