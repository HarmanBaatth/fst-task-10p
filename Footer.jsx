import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Explore</h3>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div>
          <h3>Support</h3>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h3>Stay connected</h3>
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="24" />
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="24" />
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="24" />
        </div>
      </div>
      <h4>DEV@Deakin</h4>
      <p>Privacy Policy | Terms | Code of Conduct</p>
    </footer>
  );
}

export default Footer;