// src/components/Footer.js
import React from "react";
import "../../src/index.css";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section: Social Media */}
        <section className="social-media">
          {/* Facebook */}
          <a className="social-btn facebook" href="#!" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* Twitter */}
          <a className="social-btn twitter" href="#!" role="button">
            <i className="fab fa-twitter"></i>
          </a>
          {/* Google */}
          <a className="social-btn google" href="#!" role="button">
            <i className="fab fa-google"></i>
          </a>
          {/* Instagram */}
          <a className="social-btn instagram" href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a>
          {/* LinkedIn */}
          <a className="social-btn linkedin" href="#!" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* GitHub */}
          <a className="social-btn github" href="#!" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>© {new Date().getFullYear()} My eCommerce Store |</p>
      </div>
    </footer>
  );
};

export default Footer;
