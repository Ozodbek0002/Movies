import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1>MOVIES</h1>


        
      </div>

      <div className="social-icons">
        <a href="https://www.facebook.com/" aria-label="Facebook">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/500px-Facebook_Logo_%282019%29.png"
            alt="Facebook"
          />
        </a>
        <a href="https://www.instagram.com/" aria-label="Instagram">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            alt="Instagram"
          />
        </a>
        <a href="https://x.com/" aria-label="Twitter">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/716/467/non_2x/twitter-icon-free-png.png"
            alt="Twitter"
          />
        </a>
        <a href="https://google.com" aria-label="Google">
          <img
            src="https://cdn-icons-png.flaticon.com/512/720/720255.png"
            alt="Google"
          />
        </a>
        <a href="https://youtube.com" aria-label="YouTube">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt="YouTube"
          />
        </a>
      </div>
      <div className="footer-section">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/favorities">Fovourites</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        ©2025 | Designed by <span>MOVIES TEAM</span>
      </div>
    </footer>
  );
}
