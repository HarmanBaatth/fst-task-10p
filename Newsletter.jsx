import React, { useState } from "react";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscription successful! Check your inbox.");
        setEmail("");
      } else {
        setMessage("Failed to subscribe.");
      }
    } catch (err) {
      setMessage("Server error.");
    }
  };

  return (
    <div className="newsletter">
      <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="newsletter-input"
      />
      <button onClick={handleSubscribe} className="newsletter-button">
        Subscribe
      </button>
      <p>{message}</p>
    </div>
  );
}

export default Newsletter;