import { useEffect, useState } from "react";
import { verifyEmail } from "../api/auth";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function OtpVerify() {
  const [status, setStatus] = useState("Verifying...");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      verifyEmail(token)
        .then(() => {
          setStatus("Email verified! Redirecting...");
          setTimeout(() => navigate("/login"), 2000);
        })
        .catch(() => setStatus("Verification failed. Invalid or expired link."));
    } else {
      setStatus("No token found.");
    }
  }, []);

  return (
    <div className="container">
      <h2>Email Verification</h2>
      <p>{status}</p>
    </div>
  );
}