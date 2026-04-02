import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>You are logged in successfully!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}